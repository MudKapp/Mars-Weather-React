import axios from 'axios'

export default async function getWeekWeatherData(){
    const dateObj = new Date()
    const day = String(dateObj.getDate())
    const month = String(dateObj.getMonth())
    const year = String(dateObj.getFullYear())
    const response = await axios.get(`/v1/weather?month=${month}&year=${year}&day=${day}&range=week`)
    console.log(response)
    return response
}