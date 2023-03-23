import React, { useEffect, useState } from 'react'
// import FireBase from '../FireBase';
// import { isEmpty } from 'lodash'
import Button from 'react-bootstrap/Button';
import { useNavigate,useParams } from "react-router-dom";
import {  db } from '../FireBase'
import { addDoc, collection } from 'firebase/firestore/lite';


const AddEdit = () => {
    const [initUser, setInitUser] = useState({
        name: "", age: "", mobile: ""
    })
    const historty = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        
    },[id])
    const userCollectionRef = collection(db, "users")
    const { name, age, mobile } = initUser;

    const handleInput = (event) => {
        console.log("callling...", event.target.value)
        const { name, value } = event.target;
        setInitUser({
            ...initUser, [name]: value
        })
    }
    const createRecord = async (e) => {
        e.preventDefault()
        if (name && age && mobile) {
            await addDoc(userCollectionRef, { name: name, mobile: Number(mobile), age: Number(age), })
            setInitUser({
                name: "", age: "", mobile: ""
            })
            historty('/')
        }
        else {
            alert("Fill all input")
        }
    }
    return (
        <div className='container'>
            <form className="flex py-3 mt-5 flex-col justify-between h-80 border p-3 rounded-lg shadow-xl border-t-0 mb-3 border-r-0 border-l-0">
                <p className='text-center font-semibold text-3xl'>Create record</p>
                <input required
                    className='shadow-md p-2 border-b-2'
                    type="text"
                    name="name" id=""
                    value={name}
                    onChange={handleInput}
                    placeholder='Enter name' />
                <input required
                    className='shadow-md p-2 border-b-2'
                    type="number"
                    name="age" id=""
                    value={age}
                    onChange={handleInput}
                    placeholder='Enter age' />
                <input required
                    className='shadow-md p-2 border-b-2'
                    type="tel"
                    name="mobile" id=""
                    value={mobile}
                    onChange={handleInput}
                    placeholder='Enter Mobile no.' />
                <button type='submit' className='border-2 hover:bg-gray-700 bg-gray-600 cursor-pointer text-gray-100 p-2 rounded w-1/4 mx-auto' onClick={createRecord}>Create record</button>
            </form>
        </div>
    )
}

export default AddEdit
