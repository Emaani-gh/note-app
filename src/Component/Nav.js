import React from 'react'
import profile from '../images/mem_50x50.png'
import { BsSearch } from "react-icons/bs";
import {Link} from "react-router-dom"

export const Nav = () => {
  return (
    <nav>
            <div>
                <img className='profile' src={profile} alt='profile'/>
                <p>Seidu Emaani</p>
            </div>

            <div>
                <h4>All Notes</h4>
                <div>
                    <BsSearch />
                    <Link className='btn-add' to={'/add-Note'}>Add New Note</Link>
                </div>
            </div>
        </nav>
  )
}
