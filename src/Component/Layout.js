import React from 'react'
import { Outlet } from 'react-router';

import { Nav } from './Nav';
import { SideNav } from './SideNav';


export const Layout = ()=>{ 
    return( 
        <>
            <Nav />
            <div className='main'>
                <SideNav />
                <Outlet />
            </div>
            
        </>
    )

}