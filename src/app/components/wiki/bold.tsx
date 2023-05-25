interface BoldProps {
    text: string;
}

export default function Bold({ text }: BoldProps) {
    return (
        <span className="font-bold antialiased">{text}</span>
    )
}