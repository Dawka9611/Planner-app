import Navigation from "../components/PageElements/MainElements/Navigation"
import PageContainer from "../components/PageElements/PageContainer"
import styled from "styled-components"

const Performance = () => {

    return (
        <PageContainer>
            <PerformanceStyle>
                <div className="quotes">
performance
                </div>
                <div className="opportunities">

                </div>
            </PerformanceStyle>
        </PageContainer>
    )
}

export default Performance

const PerformanceStyle = styled.div`
    .quotes{
        width: 300px;
        height: 300px;
    }
`