import React from 'react'
import './Page.css'
import { useState } from 'react'

function Page(){
    const [title , setTitle] = useState('')
   
    const [mainTask , setMainTask] = useState([])
    const submitHandeler = (e)=>{
        e.preventDefault()
        setMainTask([...mainTask , {title}] )
        setTitle('')
    }

    const deleteHandeler = (i)=>{
       let copydata = [...mainTask]
       copydata.splice(i,1)
       setMainTask(copydata)
    }
    let rendertask = <h2 className='no-task'>No Task Available</h2>;
    if(mainTask.length > 0){
    rendertask = mainTask.map((t,i)=>{
        
      return(
        <li className='to-do-ele' key = 'i'>
                <h2 className='to-do-ele-data'>{t.title}</h2>
            <button onClick={()=>{
                deleteHandeler(i)
            }} className='to-do-ele-btn'>Delete</button>
        </li>
            )
        
    })}
    return(
        <>
        <div className='to-do-heading'>
        <h1>To Do List</h1>
        </div>
        <div>
            <form className='to-do-form' onSubmit={submitHandeler}>
                <input 
                className='input-form-title'
                type='text'
                placeholder='Enter Title here'
                value = {title}
                onChange={(e) =>{
                    setTitle(e.target.value)
                    
                }}  
                />
            
                <button className='submit-btn' disabled={title === ""? true : false}>Add Task</button>

            </form>
                <hr/>
                <div>
                    <ul>
                        {rendertask}
                    </ul>
                </div>
        </div>
      </>
    )
}

export default Page