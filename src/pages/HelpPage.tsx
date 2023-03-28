import Navigation from "../components/PageElements/MainElements/Navigation"
import PageContainer from "../components/PageElements/PageContainer"
import styled from "styled-components"

const HelpPage = () => {

    return (
        <PageContainer>
            <HelpPageStyle>
                <div className="quotes">
                    Help
                </div>
                <div className="opportunities">

                </div>
            </HelpPageStyle>
        </PageContainer>
    )
}

export default HelpPage

const HelpPageStyle = styled.div`
    .quotes{
        width: 300px;
        height: 300px;
    }
`