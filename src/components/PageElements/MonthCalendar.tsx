import { useState } from 'react';
import styled from 'styled-components'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const MonthCalendar = () => {
    const [date, setDate] = useState(new Date());

    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    const prevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };

    return <CalendarStyle>
        <h2>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <table>
            <thead>
                <tr>
                    {daysOfWeek.map((day) => (
                        <th key={day}>{day}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {[...Array(Math.ceil((daysInMonth + firstDayOfMonth) / 7))].map((_, weekIndex) => (
                    <tr key={weekIndex}>
                        {[...Array(7)].map((_, dayIndex) => {
                            const dayNumber = weekIndex * 7 + dayIndex + 1 - firstDayOfMonth;
                            return (
                                <td key={dayIndex}>
                                    {dayNumber > 0 && dayNumber <= daysInMonth && (
                                        <span>{dayNumber}</span>
                                    )}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={prevMonth}>Prev</button>
        <button onClick={nextMonth}>Next</button>
    </CalendarStyle>
}

export default MonthCalendar

const CalendarStyle = styled.div`
    
`