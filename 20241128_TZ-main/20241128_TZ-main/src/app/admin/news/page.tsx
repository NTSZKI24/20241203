import { edit } from "@/actions/news"
import ActionButton from "@/components/ActionButton"
import { articles } from "@/utils/fakeData"
import Link from "next/link"

export default function Page() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="col-12 my-3 text-end">
                    <Link
                        href="/admin/news/create" 
                        className="btn btn-success" 
                    >Új hír</Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Cím</td>
                            <td>Lead</td>
                            <td>Dátum</td>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map((articles) => (
                            <tr key={articles.id}>
                                <td>{articles.id}</td>
                                <td>{articles.title}</td>
                                <td>{articles.lead}</td>
                                <td>{articles.date.toLocaleDateString()}</td>
                                <td>
                                    <ActionButton />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}