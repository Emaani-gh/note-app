import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from './Context'


export const Main = ()=>{
    const {notes} = useContext(context)

    return(
        <div className='wrapper home'>
            {
                notes.map(note=>(
                    <Link key={note.id} to={`/notes/${note.id}`} className='note'>
                        <div>
                            <h4>{note.title}</h4>
                            <p className='categ'> {note.category} </p>
                        </div>

                        <p> {note.content} </p>

                        <div>
                            <h4 className='time'> 9:45am </h4>
                            <p className='date'>  January, 2022 </p>
                        </div>
                    </Link>
                ))
            }
            

            
        </div>
    )
}