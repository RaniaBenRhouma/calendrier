import React,{useState} from 'react'
import Time from './Time'

const Clendrier = () => {
    const [firstDay, setFirstDay]=useState(null);
    const [lastDay, setLastDay]=useState(null);


    return (
        <div>
            <div style={{display:"flex"}}>
              <select onChange={(e)=>setFirstDay(e.target.value)}>
              <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
              </select>
              <select onChange={(e)=>setLastDay(e.target.value)}>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
              </select>
            </div>

            <Time  firstDay={firstDay} lastDay={lastDay}/>

            <div>
                <p>first Day: {firstDay}</p> 
                <p>last Day: {lastDay}</p> 

            </div>
            
        </div>
    )
}

export default Clendrier
