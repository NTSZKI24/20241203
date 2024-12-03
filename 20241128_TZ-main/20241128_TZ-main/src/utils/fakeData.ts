export const searchValues = [
    "Gábor",
    "Péter",
    "Levente",
    "Bálint",
    "Katalin"
];

export interface IArticles {
    id: number
    title: string
    image?: string
    lead: string
    desc: string
    date: Date
}

export const articles: IArticles[] = [
    {
        id: 1,
        title: "Valami szöveg ami jó",
        lead: "2308 doboz cigivel",
        desc: "A győri Járárs jó",
        date: new Date("2024.12.03 12:00"),
        image: "https://th.bing.com/th?id=ORMS.5f85c5c0acccf3d60c3a691527404725&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0"
    }
]