import Link from "next/link";

export default function NavigationItem({
    link,
    text,
    className
}:{
    link : string;
    text: string;
    className: string;
}){
    return(
        <Link className={className} href={link}>
            {text}
        </Link>
    )
}