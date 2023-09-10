import http from '@/lib/http'
import { generateQueryParamString } from '@/lib/query'

export const getPopularMovie = async (endpoint) => {
  const params = {
    page: 1,
    language: 'en-US',
  }

  const query = generateQueryParamString(params)

  return await http(`${endpoint}?${query}`)
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getNowPlaying = async (endpoint) => {
  const params = {
    page: 1,
    language: 'en-US',
  }

  const query = generateQueryParamString(params)

  return await http(`${endpoint}?${query}`)
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getMovieDetail = async (endpoint) => {
  const params = {
    language: 'en-US',
  }

  const query = generateQueryParamString(params)
  return await http(`${endpoint}?${query}`)
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
