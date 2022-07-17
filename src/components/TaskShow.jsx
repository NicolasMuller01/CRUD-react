import React from 'react'
import { useState} from 'react';

function TaskShow({data, deleteDataMain}) {


    const deleteData=(datos)=>{
        console.log(datos)
       deleteDataMain(datos)
    }

  return (
    <div>
       {data.map(datos => (
            <div key={datos.id}>
                <p>{datos.info}</p>
                <button onClick={()=>deleteData(datos.id)}>Delete</button>
            </div>
       ))}
    </div>
  )
}

export default TaskShow