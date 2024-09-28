import { db } from "@/config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

async function addTodoToFirebase(title: string, description: string) {
	try {
		const docRef = await addDoc(collection(db, "posts"), {
			title,
			description,
			createdAt: serverTimestamp(),
		});
		console.log("post added, id ", docRef.id);
		return true;
	} catch (error) {
		console.log("could not add...error", error);
		return false;
	}
}

export { addTodoToFirebase };
