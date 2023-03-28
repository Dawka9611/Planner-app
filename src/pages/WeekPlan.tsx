import Navigation from "../components/PageElements/MainElements/Navigation"
import PageContainer from "../components/PageElements/PageContainer"
import styled from "styled-components"

const WeekPlan = () => {

    return (
        <PageContainer>
            <WeekPlanStyle>
                <div className="quotes">
Week
                </div>
                <div className="opportunities">

                </div>
            </WeekPlanStyle>
        </PageContainer>
    )
}

export default WeekPlan

const WeekPlanStyle = styled.div`
    .quotes{
        width: 300px;
        height: 300px;
    }
`