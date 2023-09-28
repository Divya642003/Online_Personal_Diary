import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import pageContext from '../Context/pages/pageContext'
import Alert from './Alert'
import NavBar from './NavBar'

export default function Main()
{
    const context= useContext(pageContext);
    const {alert,showAlert}=context;

    useEffect( ()=>{
        showAlert("It is Your Online Personal Dairy. Keeping your feelings secure and with you always... Project By Divya Singh","primary")
    },[])
    return(
        <div>
             <NavBar/>
             <Alert alert={alert}/>
             <div className="container ">
             <Outlet/>
             </div>
        </div>
    )
}