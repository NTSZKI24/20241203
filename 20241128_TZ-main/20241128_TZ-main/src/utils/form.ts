export function formDataToJson(formData: FormData) {
    const json: Record<string, any> = {}
    formData.forEach((value: any, key: string) => {
        json[key] = value 
    })
    return json;
}