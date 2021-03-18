import React, { useState } from 'react';


const Main = () => {
    const [list, setList] =  useState([]);
    const [work,setWork] =useState('');
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        if (work) {          
            const job = { id: new Date().getTime().toString(), work };
            setList((oldJob) => 
            {
              return [...oldJob, job];
            });
            setWork('');
        } 
        else 
        {
          alert("You must write something!");
        }
    };
    return (
      <div className="">
        <h1>My To Do List</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div className='box'>
                <input
                  type='text'
                  id='work'
                  name='work'
                  value={work}
                  onChange={(e) => setWork(e.target.value)
                  }
                />
                <button  className="addbt" type='submit'>+</button>
          </div>
        </form>        
          <ul id="myul">
            {
            list.map((job)=>
            {              
              const {id,work}=job;
                return(                
                    <li className="" onClick={(e)=>e.target.classList.toggle('checked')}>
                      {work}<span onClick={()=>
                      {                    
                           const newJobs=list.filter((job)=>job.id!==id);
                           setList(newJobs);
                      }
                    } className="close">X</span></li>
                );
            })
          }
          </ul>

      </div>
    
    );
    }
export default Main;