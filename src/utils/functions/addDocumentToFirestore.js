import {database} from "./../../firebase";
import {collection, addDoc} from "firebase/firestore";

export const addDocumentToFirestore = async (fileData) => {
    const docRef = await addDoc(collection(database, "uploadedDocuments"), fileData);
    return docRef.id; // Return document ID
};
