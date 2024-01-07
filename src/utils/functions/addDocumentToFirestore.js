import {database} from "../../firebase";
import {addDoc, collection} from "firebase/firestore";

export const addDocumentToFirestore = async (fileData, user) => {
    const docRef = await addDoc(collection(database, "documents"), {
        ...fileData,
        uid: user.uid,
        username: user.email,
    });

    return docRef.id; // Return document ID
};
