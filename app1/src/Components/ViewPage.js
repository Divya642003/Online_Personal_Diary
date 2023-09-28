import React, { useContext } from 'react';
import pageContext from '../Context/pages/pageContext';





export default function ViewPage()
{
    const{view}=useContext(pageContext);
    return(
        <div className='container'>
             <div className='view-details-box'>
             <h4 className='view-details'>Date: {view.date}</h4>
             <h4 className='view-details'>Tag :  {view.tag}</h4>
             </div>

             <div className="conatiner my-5 mx-2 view-div">
             <h2 id="view-title">
                <strong>{view.title}</strong>

            </h2>
             
             <div className="conatiner my-4 mx-5 ">
                {view.description}
             </div>
             </div>

        </div>
    )
}