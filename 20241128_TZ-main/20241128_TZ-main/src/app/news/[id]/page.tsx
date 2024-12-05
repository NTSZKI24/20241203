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
        <div className="row">
            {article.image && (
                <div className="col-3">
                <img 
                    src={article.image}
                    style={{
                        width: "100%"
                    }}    
                />
            </div>
            )}
            <div className={`col-${article.image ? 9 : 12}`}>
                    <h1>{article.title}</h1>

                    <p className="fw-bold">
                        {article.lead}
                    </p>

                    <p>
                        {article.desc}
                    </p>

                    <small>
                        {article.date.toLocaleDateString()}
                    </small>

            </div>
        </div>
    )
}