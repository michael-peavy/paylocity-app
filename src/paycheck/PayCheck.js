import React from "react";
import './paycheck.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import listPlugin from '@fullcalendar/list';


function PayCheck() {
  return (
    
<div className='body'>
<div >
<div className="maincontainer">

      <FullCalendar style={{width:'50px'}}
        plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
          
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
        
        eventClick={
          function(arg){
            alert(arg.event.title)
            alert(arg.event.start)
          }
        }
          
        
        events={[
          { title: 'Payday', date: '2020-10-02' },
          { title: 'Payday ', date: '2020-10-09' },
          { title: 'Payday', date: '2020-10-16' },
          { title: 'Payday', date: '2020-10-23' },
          { title: 'Payday 2', date: '2020-10-30' },
          { title: 'Staff Meeting', date: '2020-10-13' },
        ]}
      />
      </div>

      
</div>


<div className='center1'>

<table className = 'customers' style={{width:'100%'}}>

<tr>
<th>Firstname</th>
<th>Lastname</th> 
<th>Hours </th>
<th>Rate</th>

<th>Pay </th>
</tr>



<tr>

<td>Michael</td>
<td>Peavy</td>
<td>50</td>
<td>$0.00</td>
<td>$0.00</td>

</tr>




</table>
</div> 
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

</div>








  );
}

  

export default PayCheck;
