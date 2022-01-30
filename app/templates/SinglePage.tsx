import { useContext } from "react"
import { AppContext } from "../contextStore/ContextStore"

const SinglePage: React.FC = () => {
    const { pageContent } = useContext(AppContext)
    return <>{pageContent.Title}</>
}
export default SinglePage
