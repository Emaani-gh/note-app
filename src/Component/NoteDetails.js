import React, { useContext, useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { context } from './Context'



export const NoteDetails = () => {
    const {id} = useParams()
    let navigate = useNavigate()

    const {actions} = useContext(context)
    const [note, setNote] = useState({});

    const handleChange = (e)=>{
        setNote((prev)=>{
            return{ 
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleUpdate = (e)=>{
        e.preventDefault();

        fetch(`http://localhost:3000/api/notes/${id}`,{
            method : "Put",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(note)
        })
        .then(()=> {
            actions.fetchNotes();
            navigate('/')
        } )
    }

    const handleDelete = (e)=>{
        e.preventDefault();

        fetch(`http://localhost:3000/api/notes/${id}`,{
            method : "Delete",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(note)
        })
        .then(()=> {
            actions.fetchNotes();
            navigate('/')
        } )
    }

    const handleCancel = (e)=>{
        e.preventDefault();
        navigate('/')
    }

    useEffect(()=>{
        fetch(`http://localhost:3000/api/notes/${id}`)
        .then(res=>res.json())
        .then(data=>setNote(data))
    },[])

  return (
    <div className='wrapper'>
        <form>
            <div>
                <label htmlFor='title' >Title</label>
                <input type={'text'} name='title' id='title'  placeholder='Enter Title' onChange={handleChange} value={note.title || ''} />
            </div>

            <div>
                <label htmlFor='category'>Category</label>
                <select id='category' name='category' onChange={handleChange} value={note.category} >
                    <option>Select Category</option>
                    <option >Work</option>
                    <option>Study</option>
                    <option>Assignment</option>
                    <option>Videos</option>
                    <option>Projects</option>
                    <option>WishList</option>
                </select>
            </div>

            <div>
                <label htmlFor='title' >Content</label>
                <textarea id='content' placeholder='Type Note Here' name='content' onChange={handleChange} value={note.content}>
                </textarea>
            </div>

            <div>
                <button className='submit' onClick={handleUpdate}>Update</button>
                <button className='submit' onClick={handleDelete}>Delete</button>
                <button className='cancel' onClick={handleCancel}>Cancel</button>
            </div>
            
        </form>
    </div>
  )
}
