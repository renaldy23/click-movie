export const calculateScore = (voted) => {
  const percentage = (voted / 10) * 100
  return Math.floor(percentage)
}