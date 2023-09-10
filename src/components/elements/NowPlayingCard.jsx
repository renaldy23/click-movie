import { formatDate } from "@/lib/date";
import { calculateScore } from "@/lib/score";
import Score from "./Score";
import Link from "next/link";

const media_url = process.env.TMDB_MEDIA_URL
const NowPlayingCard = ({movie}) => {
    return (
        <Link href={`movie/${movie.id}`} className="bg-background rounded-lg p-8 shadow-md border-zinc-800 border flex flex-col">
            <div className="pb-4 relative">
                <img src={media_url + movie.poster_path} className="rounded-lg" loading="lazy"/>
                <Score score={calculateScore(movie.vote_average)}/>
            </div>
            <div>
                <p className="text-xl font-semibold text-paragraph">{movie.title}</p>
                <p className="text-muted">{formatDate(movie.release_date, "D MMM YYYY")}</p>
            </div>
        </Link>
    );
}

export default NowPlayingCard;
