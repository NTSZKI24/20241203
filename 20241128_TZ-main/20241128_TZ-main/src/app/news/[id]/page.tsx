import { articles, IArticles } from "@/utils/fakeData"

export default async function Page({
    params
} : {
    params: Promise<{ id: number}>    
}) {
    const id = (await params).id
    const article = articles.find((article) => {
        return article.id == id;
    }) as IArticles;
    return (
        <div>
            {JSON.stringify(article)}
        </div>
    )
}