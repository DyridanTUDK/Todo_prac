import React, { useEffect, useRef, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import TaskBox from './TaskBox';

export default function InputBar() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [tasklist, setList] = useState(()=>{
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : []
    })
    
    const titleHeader = useRef(null)

    const getText = (e) =>{
        setTitle(e.target.value)
    }
    const getDate = (e) =>{
        setDate(e.target.value)
    }
    
    const storeItem = () =>{
        const uid = uuidv4()
        const itemObj = {
            id: uid, 
            title: title, 
            date: date,
            status: false
        }
        // save to localstorage as a form array of objs
        setList([...tasklist, itemObj])
        // localStorage.setItem("tasks", JSON.stringify(tasklist))
        titleHeader.current.value = ""
        setDate("")
        console.log(tasklist)
    }

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasklist))
    },[tasklist])
    
    return (
        <div className='h-50 pt-7'>
            <div style={{display:"flex", justifyContent:'center'}}>
                <input className='shadow appearance-none border rounded w-[40%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ref={titleHeader} type="text" onChange={getText} placeholder='What Do you Want to Achieve today?'/>
                <input className='shadown appearance-none border rounded w-[15%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: shadow-outline' onChange={getDate} type="date" name="" id="" value={date} />
                <button className='border rounded ml-10 py-2 px-3 bg-gray-300' onClick={storeItem}>Enter</button>
            </div>
                <TaskBox list= {tasklist} setTaskList={setList}></TaskBox>
        </div>
    )
}
