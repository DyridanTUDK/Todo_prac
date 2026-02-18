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
     <div className='h-[500px] flex flex-col items-center justify-start pt-5 bg-blue-200 mt-5 rounded-lg'>
      {taskList.length > 0 ? (
        taskList.map((data) => (
          <Task
          title={data.title}
          date={data.date}
          status={data.status}
          id={data.id}
          list = {taskList}
          setTaskList={setTaskList}
          />
        ))
      ) : (
        <div>No Task</div>
      )}
      </div>
  );
}