"use server";

import { formDataToJson } from "@/utils/form";

export async function create(previousState: any, formData: FormData) {
    const formJson = formDataToJson(formData)
    console.log(formJson)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("create")
        }, 2000)
    })
}

export async function edit(){
    console.log("szerkesztés")
}

export async function remove(){

}