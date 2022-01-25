interface IRow {
    className?: string
}

const Container: React.FC<IRow> = ({ children, className }) => {
    return (
        <div
            className={`px-sm md:px-md lg:px-lg h-full overflow-hidden flex-auto${
                className ? " " + className : ""
            }`}
        >
            {children}
        </div>
    )
}
export default Container
