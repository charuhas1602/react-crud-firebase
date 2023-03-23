
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../FireBase';

const Home = () => {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      // console.log(data)
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      // console.log(users)
    }
    getUsers()
  }, [])

  const deleteUser = async (id) => {
    if(window.confirm("Are you sure you want delete record")){
      const userDoc = doc(db, "users", id)
      await deleteDoc(userDoc)
      window.location.reload()
    }
    
  }
  if(users.length===0) return <div className='text-center text-8xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>No record! </div>

  return (
    <>
      <div className="container">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">No.</th>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4">Mobile</th>
              <th scope="col" className="px-6 py-4">Age</th>
              <th scope="col" className="px-6 py-4">Delete</th>
              <th scope="col" className="px-6 py-4">Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => {
              return (
                <>
                  <tr key={user.id} className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4">{index+1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{user.mobile}</td>
                    <td className="whitespace-nowrap px-6 py-4">{user.age}</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer" onClick={() => deleteUser(user.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>

                    </td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer" >
                      <Link to={`/addedit/${user.id}`} className="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>

                      </Link>                    

                    </td>

                  </tr>
                </>
              )
            })}
          </tbody>
        </table>


      </div>
    </>
  )
}

export default Home
