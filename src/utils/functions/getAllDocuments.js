import { database } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const getAllDocuments = async (user) => {
    try {
        const q = query(collection(database, "documents"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const documents = [];

        querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, ...doc.data() });
        });

        return documents;
    } catch (error) {
        console.error("Error getting documents: ", error);
        throw error;
    }
};
