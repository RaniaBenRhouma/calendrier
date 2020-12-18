import React, { useState } from 'react'

const Time = ({firstDay, lastDay}) => {
    const [hours,setHours]=useState([{id:1,y:0,z:"00:00"},{id:2,y:1,z:"01:00"},{id:3,y:2,z:"02:00"},{id:4,y:3,z:"03:00"},{id:5,y:4, z:"04:00"},{id:6,y:5,z:"05:00"},{id:7,z:"24/24"}])
    const [statut,setStatut]=useState("open")
    const [openHour, setOpenHour]=useState(null);
    const [openHourId, setOpenHourId]=useState(null);
    const [closeHour, setCloseHour]=useState(null);
    const [closeHourId, setCloseHourId]=useState(null);



    const selectHour =(id)=>{
       let hourFilter= hours.filter(el=>el.id===id)
if (statut==="open"){
    setOpenHour(hourFilter[0].y);
    setOpenHourId(hourFilter[0].id);
}
else {
    setCloseHour(hourFilter[0].y);
    setCloseHourId(hourFilter[0].id);
}
    }

    const affichageData = () =>{
        if((!firstDay) || (!lastDay) || (!openHour) || (!closeHour)) {
                alert("You missed choosing something. check it out !!!");
                console.log("ok dear program");

        }
        else {
        console.log(firstDay)
        console.log(lastDay)
        console.log(openHour)
        console.log(closeHour)
        }

    }
    return (
        <div>
            <div>
<select onChange={(e)=>setStatut(e.target.value)}>
    <option value="open">open</option>
    <option value="close">close</option>
</select>

            </div>
    {hours.map(el=><div key={el.id} className={(((statut==="open")&&(el.id===openHourId))||((statut==="close")&&(el.id===closeHourId)))? "choosenHour": "unchoosenHour"}>
<p onClick={()=>{selectHour(el.id)}}>{el.z} </p>
{/* onClick={()=>{setHours(el.id)}} */}
            </div>)}

            <div onClick={affichageData}>
                Submit 
            </div>
            <div>
                <p>openHour: {openHour}</p> 
                <p>closeHour: {closeHour}</p> 

            </div>
        </div>
    )
}

export default Time
