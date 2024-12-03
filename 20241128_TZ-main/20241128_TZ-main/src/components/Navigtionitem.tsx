export default function NavigationItem({
    link,
    text
}:{
    link : string;
    text: string;
}){
    return(
        <a href={link}>{text}</a>
    )
}