import React, { useState,useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { context } from './Context'


export const NewNote = () => {

    let navigate = useNavigate()
    const [note, setNote] = useState({})
    const {actions} = useContext(context)

    const handleChange = (e)=>{
        setNote((prev)=>{
            return{ 
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch('https://note-api-du6k.onrender.com/api/notes',{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(note)
        })
        .then((res)=> {
            actions.fetchNotes();
            navigate('/')
        } )
    }

    const handleCancel = (e)=>{
        e.preventDefault();
        navigate('/')
    }
  return (
    <div className='wrapper'>
        <form>
            <div>
                <label htmlFor='title' >Title</label>
                <input type={'text'} name='title' id='title' placeholder='Enter Title' onChange={handleChange} value={note.title || ''} />
            </div>

            <div>
                <label htmlFor='category'>Category</label>
                <select id='category' name='category' onChange={handleChange} value={note.category}>
                    <option>Select Category</option>
                    <option>Work</option>
                    <option>Study</option>
                    <option>Assignment</option>
                    <option>Videos</option>
                    <option>Projects</option>
                    <option>WishList</option>
                </select>
            </div>

            <div>
                <label htmlFor='title' >Content</label>
                <textarea id='content' name='content' placeholder='Type Note Here' onChange={handleChange} value={note.content}>
                </textarea>
            </div>

            <div>
                <button className='submit' onClick={handleSubmit}>Submit</button>
                <button className='cancel' onClick={handleCancel}>Cancel</button>
            </div>
            
        </form>
    </div>
  )
}
