"use client";

import { useState } from "react";
import { searchValues } from "@/utils/fakeData";  

export default function Search() {

    const [value, setValue] = useState("")

    const filteredValues = searchValues.filter((item) => {
        return item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })

    return (
        <form className="d-flex position-relative" role="search">
            <input 
                className="form-control me-2" 
                placeholder="Keresés"
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
            <ul 
                className="position-absolute bg-white p-2"
                style={{ 
                    top: "100%",
                    width: "100%",
                    listStyle: "none",
                    display: value.length >= 2 ? "block" : "none"
                }}
            >
                {filteredValues.map((item) => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </form>
    )
}