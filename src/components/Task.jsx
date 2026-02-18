import React, { use } from 'react'
import { useState } from 'react'


export default function Task({title, date, id, status, list, setTaskList}) {

  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdits = () =>{
    if(!editing){
      setEditing(true)
      return;
    }
    const updatedList = list.map((task) => {
      return task.id===id 
      ? {...task, title:newTitle}
      : task
    })

    setTaskList(updatedList)
    setEditing(false)
  }


  const handleComplete = (id) =>{
    const updatedList = list.map((task) => task.id===id?{...task, status:!task.status}:task)
    setTaskList(updatedList);
    localStorage.setItem("tasks", JSON.stringify(updatedList))
  }
  const onDelete = (id) => {
    const updatedList = list.filter((task) => task.id !== id);
    setTaskList(updatedList);
    localStorage.setItem("tasks", JSON.stringify(updatedList))
  }


  return (
    <div className="flex justify-between items-center w-dvw bg-gray-500 py-2 px-5 rounded text-white" key={id}>

     {editing?(
      <input value={newTitle} onChange={e=> setNewTitle(e.target.value)}/>
     ):(
      !status?(
        <h1 className=' font-extrabold text-xl'>{title}</h1>
      ):
      <h1 className=' font-extrabold text-xl line-through'>{title}</h1>
     )
     }
 
    <h1 className=' font-extrabold text-xl'>{date}</h1>
    <div className="btns">
    <button onClick={handleEdits} className='bg-orange-500 py-1.5 px-1 rounded-lg ml-3 text-xl min-w-21.25'>{editing?"Save":"Edit"}</button>
    <button onClick={()=>onDelete(id)} className='bg-red-500 py-1.5 px-1 rounded-lg ml-3 text-xl min-w-21.25'>delete</button>
    <button onClick={() =>handleComplete(id)} className='bg-green-500 py-1.5 px-1 rounded-lg ml-3 text-xl min-w-21.25'>complete</button>
    </div>
    </div>
  )
}
