import Link from "next/link";

interface ContactProps {
    color: string;
    href: string;
    site: string;
}

export default function Contact({color, href, site}: ContactProps) {
    return <Link 
        className={`${color} flex items-center justify-center text-white text-center rounded-full mt-2.5 w-full h-10`}
        href={href}
    >{site}</Link>
}