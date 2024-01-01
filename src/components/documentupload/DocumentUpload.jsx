import React, { useState } from 'react';
import { database } from '../../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDocumentToFirestore } from "../../utils/functions/addDocumentToFirestore";

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
        debugger;
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
        const uploadRef = ref(storage,`documents/${selectedFile.name}`);
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
                        uploadedAt: database.FieldValue.serverTimestamp(),
                    };
                    addDocumentToFirestore(fileData).then((docId) => {
                        console.log("Document written with ID: ", docId);
                    });
                });
            }
        );
    };
    return (
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg shadow-md">
            <label
                htmlFor="file-upload"
                className="mb-4 inline-block cursor-pointer px-4 py-2 text-base text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
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
                onClick={handleFileUpload}
                disabled={!selectedFile}
                className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:bg-indigo-300"
            >
                Upload Document
            </button>
            {uploadProgress > 0 && <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>}
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
}

export default DocumentUpload;
