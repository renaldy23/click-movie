import { getNowPlaying } from "@/services/movies"
import NowPlayingCard from "../elements/NowPlayingCard"
import Link from "next/link"

const media_url = process.env.TMDB_MEDIA_URL

export default async function NowPlaying(){
    const { results } = await getNowPlaying("movie/now_playing")

    return (
        <div className="grid grid-cols-5 gap-4">
            {
                results.map((result) => {
                    return <NowPlayingCard movie={result}/>
                })
            }
        </div>
    )
};
