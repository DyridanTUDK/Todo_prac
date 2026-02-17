import React, { useEffect, useRef, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import TaskBox from './TaskBox';

export default function InputBar() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [item, setItem] = useState({})
    const [tasklist, setList] = useState([])
    
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
        <div>
            <input ref={titleHeader} type="text" onChange={getText} />
            <input onChange={getDate} type="date" name="" id="" value={date} />
            <button onClick={storeItem}>Enter</button>
            <TaskBox list= {tasklist}></TaskBox>
        </div>
    )
}
