import PageContainer from "../components/PageElements/PageContainer"
import styled from "styled-components"
import React, { useState } from 'react';
import { sizes } from "../utilities/style/Variables";
import { DateInput } from "../components/input";

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysOfWeekMn = ['Ням', 'Дав', 'Мяг', 'Лха', 'Пүр', 'Баа', 'Бям'];


const months = [
    { nameEn: 'January', nameMn: "1-р сар", days: 31 },
    { nameEn: 'February', nameMn: "2-р сар", days: 28 },
    { nameEn: 'March', nameMn: "3-р сар", days: 31 },
    { nameEn: 'April', nameMn: "4-р сар", days: 30 },
    { nameEn: 'May', nameMn: "5-р сар", days: 31 },
    { nameEn: 'June', nameMn: "6-р сар", days: 30 },
    { nameEn: 'July', nameMn: "7-р сар", days: 31 },
    { nameEn: 'August', nameMn: "8-р сар", days: 31 },
    { nameEn: 'September', nameMn: "9-р сар", days: 30 },
    { nameEn: 'October', nameMn: "10-р сар", days: 31 },
    { nameEn: 'November', nameMn: "11-р сар", days: 30 },
    { nameEn: 'December', nameMn: "12-р сар", days: 31 },
];

const YearPlan = () => {
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

    const renderMonth = (month) => {
        const rows = [];
        let days = [];

        // Create an array of days for the month
        for (let i = 1; i <= month.days; i++) {
            days.push(i);
        }

        // Pad the first week of the month with empty cells if necessary
        const firstDayOfMonth = new Date(date.getFullYear(), month.index, 1).getDay();
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.unshift(null);
        }

        // Create rows of days with 7 cells in each row
        while (days.length) {
            rows.push(days.splice(0, 7));
        }

        // Render the month's table
        return (
            <div key={month.nameMn} className="month">
                <div className="monthName">{month.nameMn}</div>
                <table>
                    <thead>
                        <tr className="rows">
                            {daysOfWeekMn.map((dayOfWeek) => (
                                <th key={dayOfWeek}>{dayOfWeek}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="rows">
                                {row.map((day, dayIndex) => (
                                    <td key={dayIndex}>{day}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
    return (
        <PageContainer>
            <YearPlanStyle>
                <div className="yearTitle">
                    {date.getFullYear()} оны хуанли
                </div>
                <div className="inputCntr">
                    <DateInput
                        label=""
                    />
                </div>
                <div className="year-calendar">
                    {months.map((month, index) => (
                        <React.Fragment key={month.nameMn}>
                            {renderMonth({ ...month, index })}
                        </React.Fragment>
                    ))}
                </div>
                {/* <button onClick={prevMonth}>Prev</button>
                    <button onClick={nextMonth}>Next</button> */}
            </YearPlanStyle>
        </PageContainer>
    )
}

export default YearPlan

const YearPlanStyle = styled.div`
    .yearTitle{
        font-size: ${sizes.fontSizeLargest};
        font-weight: ${sizes.fontWeightBold};
        text-align: center;
        margin-bottom: ${sizes.fontSizeLargest};
        /* color: ${p => p.theme.syan}; */
    }
    .inputCntr{
        max-width: 360px;
        padding-bottom: ${sizes.spaceMedium};
    }
    .year-calendar{
        display: grid;
        grid-template-columns: repeat(4, minmax(250px, 1fr));
        grid-auto-columns: 250px;
        column-gap: ${sizes.spaceLarger};
        row-gap: ${sizes.spaceLarger};
    }
    .month{
        background-color: ${p => p.theme.mainColorDarker};
        background: ${p => p.theme.gradientSyan};
        border-radius: 8px;
        padding: ${sizes.spaceMedium};
        .monthName{
            font-size: ${sizes.fontSizeLarge};
            font-weight: ${sizes.fontWeightBold};
            margin-bottom: ${sizes.spaceSmall};
            text-align: center;
        }
        .rows{
            width: 30px;
        }
    }
    @media only screen and (max-width: 1200px){
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`