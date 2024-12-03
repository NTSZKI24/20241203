import NavigationItem from "./Navigtionitem";

export function Navigation(){
    return(
        <nav className="navigation">
            <NavigationItem>
                text: "Főoldal",
                link: "/"
            </NavigationItem>

        </nav>
    )
}