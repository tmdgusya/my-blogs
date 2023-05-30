interface SecondHeaderProps {
    title: string;
}

const SecondHeader = ({title}: SecondHeaderProps) => {
    return (
        <h2 className="mt-5 text-2xl font-semibold antialiased">{title}</h2>
    )
}

export default SecondHeader;