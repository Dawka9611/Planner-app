import Navigation from "../components/PageElements/MainElements/Navigation"
import PageContainer from "../components/PageElements/PageContainer"
import styled from "styled-components"

const YearPlan = () => {

    return (
        <PageContainer>
            <YearPlanStyle>
                <div className="quotes">
Year
                </div>
                <div className="opportunities">

                </div>
            </YearPlanStyle>
        </PageContainer>
    )
}

export default YearPlan

const YearPlanStyle = styled.div`
    .quotes{
        width: 300px;
        height: 300px;
    }
`