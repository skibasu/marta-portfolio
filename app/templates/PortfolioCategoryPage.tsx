import { IServerData } from "../../models"
import Container from "../components/Container/Container"
import PortfolioGrid from "../components/PortfolioGrid/PorftolioGrid"

const PortfolioMenuPage: React.FC<IServerData> = ({ data }) => {
    const { name: title, zone, slug } = data

    return (
        <section className="pt-lg flex flex-col flex-auto">
            <Container className="flex flex-col justify-center">
                <h1 className="font-raleway text-center font-semibold text-h1 mb-xl">
                    {title}
                </h1>
                <PortfolioGrid zone={zone} category={slug} />
            </Container>
        </section>
        //   <PageSections data={}/>
    )
}
export default PortfolioMenuPage
