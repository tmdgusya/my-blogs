interface TapProps {
    link: string;
    description: string;
}

export default function Tap({ link, description }: TapProps) {
    return (
        <sup>
            <a className="" href={link}>{description}</a>
        </sup>
    )
}