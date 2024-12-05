"use server";

export async function create() {
    setTimeout(() => {
        return "Sikeres létrehozás"
    }, 2000)
}

export async function edit(){
    console.log("szerkesztés")
}

export async function remove(){

}