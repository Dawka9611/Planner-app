import Navigation from "../components/PageElements/MainElements/Navigation"
import PageContainer from "../components/PageElements/PageContainer"
import styled from "styled-components"

const DayPlan = () => {

    return (
        <PageContainer>
            <DayPlanStyle>
                <div className="quotes">
Day
                </div>
                <div className="opportunities">

                </div>
            </DayPlanStyle>
        </PageContainer>
    )
}

export default DayPlan

const DayPlanStyle = styled.div`
    .quotes{
        width: 300px;
        height: 300px;
    }
`