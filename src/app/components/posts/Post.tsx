import Image from "next/image";
import Link from "next/link";

interface PostProps {
    title: string;
    description: string;
    img: string;
    href: string;
}

export default function Post({title, description, img, href}: PostProps) {
    return <div className="border-t-4 border-t-neutral-700 basis-1/4 md:basis-1/4">
        <Link className="w-max" href={href}>
            <h2 className="mt-2 bold font-bold">{title}</h2>
            <Image 
                className="max-w mt-2" 
                src={img}
                width={300}
                height={300}
                alt="image"
            />
            <p className="mt-2">
                {description}
            </p>
        </Link>
    </div>
}