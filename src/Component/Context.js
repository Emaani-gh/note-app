import React,{ useEffect, useState } from 'react'


export const context = React.createContext()

export const Provider = (props)=>{
    const [notes,setNotes] = useState([])

    const fetchNotes = ()=>{
        fetch('https://note-api-du6k.onrender.com/api/notes')
        .then(res=>res.json())
        .then(data=>setNotes(data))
    }

    useEffect(()=>{
        fetchNotes()
    },[])

    const value = {
        notes,

        actions :{
            fetchNotes
        }
    }
    return(
        <context.Provider value={value}>
            {props.children}
        </context.Provider>
    )
}
