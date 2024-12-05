"use client";

import { edit, remove } from "@/actions/news"

export default function ActionButton() {
    return (
        <div className="btn-group">
            <button
                className="btn btn-warning"
                onClick={() => {
                    edit()
                }}
            >🖊</button>
            <button className="btn btn-danger">🖊</button>
            <button
                className="btn btn-danger"
                onClick={() => {
                    remove()
                }}
            
            >🚯</button>
        </div>
    )
}