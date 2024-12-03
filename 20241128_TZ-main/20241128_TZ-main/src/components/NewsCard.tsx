import { IArticles } from "@/utils/fakeData";
import Link from "next/link";

export default function NewsCard({
    article,
    col = 3
} : {
    article: IArticles
    col?: number
}) {
    return (
        <div className={`col-${col}`}>
            <div className="card">
                {article.image && (
                    <img className="card-img-top" src={article.image} />
                )}
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">
                        {article.lead}
                    </p>
                    <Link href={`/news/${article.id}`} className="btn btn-primary" >
                        Elolvasom
                    </Link>
                </div>
            </div>
        </div>
    )
}