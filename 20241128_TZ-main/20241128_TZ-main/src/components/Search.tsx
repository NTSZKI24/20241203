"use client";

export default function Search() {

    return (
        <form className="d-flex position-relative" role="search">
            <input 
                className="form-control me-2" 
                placeholder="Keresés" 
            />
            <ul 
                className="position-absolute bg-white p-2"
                style={{ 
                    top: "100%",
                    width: "100%",
                    listStyle: "none"
                }}
            >
                <li>teszt</li>
            </ul>
        </form>
    )
}