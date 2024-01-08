import React, {useState} from 'react';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import {serverTimestamp} from 'firebase/firestore';
import {addDocumentToFirestore} from "../../utils/functions/addDocumentToFirestore";
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {useAuth} from "../../context/AuthContext";


function DocumentUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadStatus, setUploadStatus] = useState('');
    const navigate = useNavigate();

    const {currentUser} = useAuth();

    const handleFileChange = (event) => {
        if (event?.target?.files?.length > 0) {
            setSelectedFile(event.target.files[0]);
            setUploadStatus('');
        }
    };

    const handleFileUpload = () => {
        if (!selectedFile) {
            setUploadStatus('Please select a file to upload.');
            return;
        }

        let selectedFileBlob = null;

        selectedFileBlob = new Blob([selectedFile], {type: '.doc,.docx,application/pdf'});

        const storage = getStorage();
        const uploadRef = ref(storage, `documents/${uuidv4()}-${selectedFile.name}`);
        const uploadTask = uploadBytesResumable(uploadRef, selectedFileBlob);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
            },
            (error) => {
                // Handle unsuccessful uploads
                console.log(error);
                setUploadStatus('Error in uploading file');
            },
            () => {
                // Handle successful uploads
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const fileData = {
                        fileId: uuidv4(),
                        fileName: selectedFile.name,
                        fileUrl: downloadURL,
                        uploadedAt: serverTimestamp(),
                    };
                    addDocumentToFirestore(fileData, currentUser).then((docId) => {
                        alert("Document uploaded successfully.");
                        navigate('/documents');
                    });
                });
            }
        );
    };
    return (
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg shadow-md">
            <label
                htmlFor="file-upload"
                className="bg-purple-900 cursor-pointer hover:bg-purple-700 text-white font-medium py-2 px-4 rounded"
            >
                Choose File
            </label>
            <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".doc,.docx,application/pdf"
            />
            <span className="mb-4 text-sm text-gray-600">{selectedFile?.name}</span>
            <button
                className="bg-purple-700 hover:bg-purple-500 cursor-pointer text-white font-medium py-2 px-4 rounded"
                onClick={handleFileUpload}
                disabled={!selectedFile}>
                Upload
            </button>
            {uploadProgress > 0 && <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>}
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>

    );
}

export default DocumentUpload;
