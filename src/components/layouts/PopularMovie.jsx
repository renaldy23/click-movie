'use client'
import { formatDate } from '@/lib/date'
import { getPopularMovie } from '@/services/movies'
import { Carousel } from 'flowbite-react'
import { useState, useEffect } from 'react'
import PopularMovieCard from '../elements/PopularMovieCard'

const PopularMovie = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopularMovie('movie/popular').then((res) => {
            setPopular([...res.results])
        })
    }, [])

    return (
        <Carousel>
            {
                popular.map((data) => {
                    return <PopularMovieCard movie={data}/>
                })
            }  
        </Carousel>
    );
}

export default PopularMovie;
