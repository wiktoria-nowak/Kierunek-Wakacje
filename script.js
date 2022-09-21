const popup = document.querySelector(".popup")
const cityName = document.querySelector(".city-name")
const temp = document.querySelector(".temperature")
const weatherIcon = document.querySelector(".weather-icon")

const allBtns = document.querySelectorAll(".weather-button")
const popupBtn = document.querySelector(".popup-btn")


const showPopup = () => {
    popup.classList.add("active")
}

const closePopup = () => {
    popup.classList.remove("active")
    clearPopup()
}

const clearPopup = () => {
    cityName.textContent = ""
    temp.textContent = ""
    weatherIcon.textContent = ""
}

allBtns.forEach(btn => {
    btn.addEventListener("click", showPopup)
})

popupBtn.addEventListener("click", closePopup)



// const cities = document.querySelectorAll(".weather")

// const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='

// const API_KEY = '&appid=c8e2e13c3fe4b04518193385fc78d58b'

// const API_UNITS = '&units=metric'


// window.onload = () => {
//     cities.forEach(city => {

//         const temp = city.document.querySelector(".temperature")
//         const weatherIcon = city.document.querySelector(".weather")

//         const getWeather = () => {
//             const cityName = city.document.querySelector("h3")
//             const URL = API_LINK + cityName + API_KEY + API_UNITS

//             axios.get(URL).then(res=> {
//                 const temp = res.data.main.temp
//                 const status = Object.assign({}, ...res.data.weather)

//                 temperature.textContent = Math.floor(temp) + "°C"


//                 // console.log(res.data.weather[0].id);


//             })
//         }

//         getWeather()
//     })
// }