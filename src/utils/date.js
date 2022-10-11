export const getCurrentDate = () => {
  let now = new Date()
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
}

export const formatDateTime = date => {
  if (date) {
    let [year, month, day, hour] = date.split('-')
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
  }
  return date
}

const addZeroToDate = n => (n < 10 ? `0${n}` : `${n}`)
