import Link from "next/link";
import GithubIcon from "../icon/Github";
import Image, { StaticImageData } from "next/image";

interface RepoThumbnailProps {
    image: string | StaticImageData;
    href: string;
    title: string;
    description: string;
}

export default function RepoThumbnail({image, href, title, description}: RepoThumbnailProps) {
    return <div className="border-4 border-solid border-black rounded-md mt-4 mb-4">
    <Link 
        className="flex"
        href={href}
      >
      <Image
        className="max-w-xs w-full max-h-52"
        src={image}
        width={0}
        height={0}
        alt="img"
      />
      <div className="flex flex-col ml-5">
        <h1 className="text-2xl mt-2 font-bold">{title}</h1>
        <p className="text-lg mt-2">{description}</p>
        <div className="flex flex-row mt-8">
          <GithubIcon/>
          <p className="ml-2 text-sm">{href}</p>
        </div>
      </div>
    </Link>
  </div>
}