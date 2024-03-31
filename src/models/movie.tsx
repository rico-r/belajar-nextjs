import db from "./db";

export interface Movie {
    id?: string;
    title?: string;
    poster?: string;
    release_date?: string;
    age_rating?: string;
    duration?: string;
    rating?: string;
    genre?: string[];
    director?: string[];
    writer?: any;
    cast?: any;
    sinopsis?: string;
}

const movies = db.collection('movies');

export async function getAll(limit: number = 0): Promise<Movie[]> {
    var result = movies.aggregate([
        { $sort: { title: 1, release_year: 1 } },
    ]);
    if (limit) result = result.limit(limit);
    var list = [];
    for await (const x of result) {
        list.push(x);
    }
    return list;
}