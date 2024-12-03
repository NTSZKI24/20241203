import NewsCard from "@/components/NewsCard"
import { articles } from "@/utils/fakeData"

export default function Page(){
    return (
        <div className="row">
            {articles.map((articles) => (
                <NewsCard 
                    article={articles}
                    key={articles.id}
                />
            ))}
        </div>
    )
}