interface FisrtHeaderProps {
    title: string;
}

const FirstHeader = ({title}: FisrtHeaderProps) => {
    return (
        <h1 className="mt-5 text-4xl font-semibold antialiased">{title}</h1>
    )
}

export default FirstHeader;