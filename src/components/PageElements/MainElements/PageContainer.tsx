import Navigation from "./Navigation"

type Props = {
    children: JSX.Element
}

const PageContainer = ({ children }: Props) => {
    return <div className="pageContainer">
        <Navigation />
        <div>
            {children}
        </div>
    </div>
}

export default PageContainer