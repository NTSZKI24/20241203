"use client";


import { create } from "@/actions/news";
import { useActionState } from "react";

export default function NewsCreateForm() {
    const [ message, formAction, isPending ] = useActionState(create, null)

    return(
        <form action={formAction}>
            {isPending ? "Loading..." : `${message}`}
            <div className="mb-3">
                <label className="rom-label">
                    Cím
                </label>
                <input className="form-control" name="title" />
            </div>
            <div className="mb-3">
                <label className="rom-label">
                    Lead
                </label>
                <input className="form-control" name="lead" />
            </div>
            <div className="mb-3">
                <label className="rom-label">
                    Tartalom
                </label>
                <textarea className="form-control" rows={10} name="description"></textarea>
            </div>
            <div className="mb-3">
                <input type="submit" value="Létrehozás" className="btn btn-success" />
            </div>
        </form>
    )
}