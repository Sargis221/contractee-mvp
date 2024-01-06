import {database} from "./../../firebase";

export const addDocumentToFirestore = async (fileData) => {
    const docRef = await database.collection('uploadedDocuments').add(fileData);
    return docRef.id; // Return document ID
};
