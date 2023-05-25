interface TapProps {
    link: string;
    description: string;
}

export default function Tap({ link, description }: TapProps) {
    return (
        <sup>
            <a className="text-cyan-700 font-bold" href={link}>{description}</a>
        </sup>
    )
}