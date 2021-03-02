import moment from 'moment'
// fullcalendar
import React, {useState, useEffect} from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';
import salad from './img/ss.png';
import chicken from './img/aa.png';

function FullCalendars() {    
    var event=[
        { title: '', date: '2021-03-15', type: 'chicken'},
        { title: '', date: '2021-03-16', type: 'chicken'},
        { title: '', date: '2021-03-17', type: 'salad'},
        { title: '', date: '2021-03-18', type: 'salad'},
        { title: '', date: '2021-03-19', type: 'salad'},
    ]

    const [data, setData] = useState([]);
    const [info, setInfo] = useState({});
    
    useEffect(() => {
        event.push(info)
        setData(event)
    }, [info])

    function renderEventContent(eventInfo) {
        const type = eventInfo.event._def.extendedProps.type

        console.log(eventInfo)
        if(type === 'salad'){
            return (
                <>
                    <img src={salad} width={'100%'}/>
                    <div style={{textAlign: 'center'}}>400k</div>
                </>
            )
        }else if(type === 'chicken'){
            return (
                <>
                    <img src={chicken} width={'100%'}/>
                    <div style={{textAlign: 'center'}}>1200k</div>
                </>
            )
        }
    }


    return (
        <div style={{height: '100%', width: '100%'}}>
            <FullCalendar
                plugins={[ interactionPlugin, dayGridPlugin ]}
                editable={true}
                initialView="dayGridMonth"
                eventContent={renderEventContent}
                selectable={true}
                dateClick={function(info) {
                    alert('clicked ' + info.dateStr);
                    // let t = prompt('입력하세요')
                    // let s = prompt('타입')

                    // setInfo({ title: t, date: info.dateStr, type: s})
                }}
                select={function(info) {
                    alert('selected ' + info.startStr + ' to ' + info.endStr);
                }}
                events={event}
            />
            
        </div>
    );
}
export default FullCalendars;