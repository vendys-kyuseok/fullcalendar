import moment from 'moment'

// big-calendar
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment)


function BigCalendar() {
  return (
      <div>
        <Calendar
            localizer={localizer}
            events={[
            {
                title: '다이어트 시작',
                allDay: false,
                start: new Date,
                end: new Date,
            },
            {
                title: '하루 3km 뛰기',
                allDay: false,
                start: new Date,
                end: new Date,
            },
            {
                title: '치킨 파티',
                allDay: false,
                start: moment(new Date).add('day', -1),
                end: moment(new Date).add('day', -1),
            }
            ]}
            startAccessor="start"
            endAccessor="end"
            views={['month', 'day']}
            style={{ height: 500 }}
        />
      </div>
  );
}

export default BigCalendar;

