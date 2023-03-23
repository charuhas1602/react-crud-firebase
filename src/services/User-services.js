import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore/lite";
import { db } from "../FireBase";

const collectionRef = collection(db, "users")
const  UserDataSrvices ={
    addUser : (newUser) => {
        return addDoc(collectionRef, newUser)
    },
    updateUser:(id,updateUser)=>{
        const userDoc=doc(db,"users",id)
        return updateDoc(userDoc, updateUser)
    },
    deleteUser:(id)=>{
        const userDoc = doc(db, "users", id)
        return deleteDoc(userDoc)
    },
    getAllUser:()=>{
        return getDocs(collectionRef)
    },
    getUser:(id)=>{
        const userDoc= doc(collectionRef,"users",id)
        return getDoc(userDoc)
    }
}


export default UserDataSrvices;