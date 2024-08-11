import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "./init";

// BLOG
export const getBlog = async () => {
  try {
    const snapshot = await getDocs(collection(db, "blog"));
    const blog = snapshot.docs.map((e) => ({
      id: e.id,
      ...e.data(),
    }));
    return blog;
  } catch (err) {
    return false;
  }
};

export const getBlogCategory = (category: string) => {};

// SUBSCRIBE
export const subscribe = async (email: string) => {
  try {
    await addDoc(collection(db, "subscribe"), {
      email,
    });
    return true;
  } catch (e) {
    return false;
  }
};
