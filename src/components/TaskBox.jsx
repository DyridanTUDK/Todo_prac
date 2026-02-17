import React, { useEffect, useState } from 'react'
import Task from "./Task"
export default function TaskBox({list}) {
    const [taskList, setTaskList] = useState([])
    // Retrieve From localStorage
    useEffect(()=>{
        try{
            const saved  = localStorage.getItem("tasks");
            if(saved){
                setTaskList(JSON.parse(saved))
            }
        }
        catch(err){
            console.log(err);
            setTaskList([])
        }
    },[])




    // Render From PropDrilling
    useEffect(() => {
    try{
       if(list && Array.isArray(list)){
        setTaskList(list);
       }
    }
    catch(err){
        console.error("Invalid Json", list)
    }
    }, [list]);
    
    return (
     <>
      {taskList.length > 0 ? (
        taskList.map((data) => (
          <Task
            title={data.title}
            date={data.date}
            status={data.status}
            key={data.id}
          />
        ))
      ) : (
        <div>No Task</div>
      )}
    </>
  );
}