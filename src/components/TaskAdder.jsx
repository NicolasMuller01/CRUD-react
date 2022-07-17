import React from 'react'
import { useState} from 'react';

function TaskAdder({dataFunction}) {
const [data, setData] = useState("");

const saveDataFunction = (e)=>{
    e.preventDefault()
    dataFunction(data)
}
  return (
    <div>
        <form>
            <input
            type="text"
            onChange={(e)=>setData(e.target.value)}
            ></input>
            <button onClick={saveDataFunction}>add</button>
        </form>
    </div>
  )
}

export default TaskAdder