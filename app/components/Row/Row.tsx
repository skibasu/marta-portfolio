interface IRow {
    className?: string
}
const Row: React.FC<IRow> = ({ children, className }) => {
    return (
        <div
            className={`flex px-sm md:px-md lg:px-lg -mx-sm md:-mx-md flex-wrap lg:-mx-lg min-w-full${
                className ? " " + className : ""
            }`}
        >
            {children}
        </div>
    )
}
export default Row
