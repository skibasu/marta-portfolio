import Row from "../Row/Row"
import PortfolioElem from "../PortfolioElem/PortfolioElem"

interface IPortfolioGridProps {
    [key: string]: any
}
const PortfolioGrid: React.FC<IPortfolioGridProps> = ({ zone, category }) => {
    return (
        <div className="-mx-8">
            <Row>
                {zone.map((v: any, k: number) => (
                    <PortfolioElem key={v.id} element={v} category={category} />
                ))}
            </Row>
        </div>
    )
}

export default PortfolioGrid
