import React, {useState} from 'react';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {serverTimestamp} from 'firebase/firestore';
import {addDocumentToFirestore} from "../../utils/functions/addDocumentToFirestore";
import {redirect} from "react-router-dom";

function DocumentUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        if (event?.target?.files?.length > 0) {
            setSelectedFile(event.target.files[0]);
            setUploadStatus('');
        }
    };

    const handleFileUpload = () => {
        if (!selectedFile) {
            return;
        }

        let selectedFileBlob = null;

        if (selectedFile.type === 'application/pdf') {
            selectedFileBlob = new Blob([selectedFile], {type: 'application/pdf'});
        } else {
            setUploadStatus('Only PDF files are supported.')
        }
        const storage = getStorage();
        const uploadRef = ref(storage, `documents/${selectedFile.name}`);
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
                        fileName: selectedFileBlob.name,
                        fileUrl: downloadURL,
                        uploadedAt: serverTimestamp(),
                    };
                    addDocumentToFirestore(fileData).then((docId) => {
                        console.log("Document written with ID: ", docId);
                        redirect('/')
                    });
                });
            }
        );
    };
    return (
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg shadow-md">
            <label
                htmlFor="file-upload"
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            >
                Choose File
            </label>
            <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
            />
            <span className="mb-4 text-sm text-gray-600">{selectedFile?.name}</span>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
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
