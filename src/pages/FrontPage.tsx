import Navigation from "../components/PageElements/MainElements/Navigation"
import PageContainer from "../components/PageElements/PageContainer"
import styled from "styled-components"

const FrontPage = () => {

    return (
        <PageContainer>
            <FrontPageStyle>
                <div className="quotes">
hhhh
                </div>
                <div className="opportunities">

                </div>
            </FrontPageStyle>
        </PageContainer>
    )
}

export default FrontPage

const FrontPageStyle = styled.div`
    .quotes{
        width: 300px;
        height: 300px;
    }
`