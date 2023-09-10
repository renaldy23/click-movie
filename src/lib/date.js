import moment from 'moment'

export const formatDate = (dateSource, strFormat) => {
  return moment(dateSource).format(strFormat)
}

export const convertRuntime = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  return `${hours}h ${remainingMinutes}m`
}
