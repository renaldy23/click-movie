const http = async (endpoint, method = 'GET', body = {}) => {
  const url = process.env.TMDB_API_URL
  const token = process.env.TMDB_API_KEY

  const options = {
    method: method,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  if (method !== 'GET') {
    options['body'] = body
  }

  const api_url = url + endpoint

  const result = await fetch(api_url, options)
  const data = await result.json()

  return data
}

export default http
