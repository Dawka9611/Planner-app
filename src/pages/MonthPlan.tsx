import Navigation from "../components/PageElements/MainElements/Navigation"
import PageContainer from "../components/PageElements/PageContainer"
import styled from "styled-components"
import MonthCalendar from "../components/PageElements/MonthCalendar"

const MonthPlan = () => {

    return (
        <PageContainer>
            <MonthPlanStyle>
                <div className="quotes">
                    month
                </div>
                <div className="opportunities">
                    <MonthCalendar />
                </div>
            </MonthPlanStyle>
        </PageContainer>
    )
}

export default MonthPlan

const MonthPlanStyle = styled.div`
    .quotes{
        width: 300px;
        height: 300px;
    }
`