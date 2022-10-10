// Fonte: https://github.com/suporteb7web/expense-tracker-react/blob/main/src/helpers/dateFilter.ts

const addZeroToDate = n => (n < 10 ? `0${n}` : `${n}`)

export const getCurrentDateTime = () => {
  let now = new Date()
  return `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDay()}-${now.getHours()}:${now.getMinutes()}`
}
export const getCurrentDate = () => {
  let now = new Date()
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
}

export const formatDateTime = date => {
  if (date) {
    let [year, month, day, hour] = date.split('-')
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year} às ${hour} h`
  }
  return date
}
