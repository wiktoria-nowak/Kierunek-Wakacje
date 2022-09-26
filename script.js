const popup = document.querySelector(".popup")
const cityName = document.querySelector(".city-name")
const temperature = document.querySelector(".temperature")
const weatherIcon = document.querySelector(".weather-icon")

const allBtns = document.querySelectorAll(".weather-button")
const popupBtn = document.querySelector(".popup-btn")

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='

const API_KEY = '&appid=c8e2e13c3fe4b04518193385fc78d58b'

const API_UNITS = '&units=metric'

const closePopup = () => {
    popup.classList.remove("active")
    clearPopup()
}

const clearPopup = () => {
    cityName.textContent = ""
    temperature.textContent = ""
    weatherIcon.textContent = ""
}

allBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        popup.classList.add("active")

        cityName.textContent = btn.previousElementSibling.textContent

        const getWeather = () => {
            const URL = API_LINK + cityName.textContent + API_KEY + API_UNITS
        
            axios.get(URL).then(res => {
                const temp = res.data.main.temp
                const status = Object.assign({}, ...res.data.weather)
        

                if (status.id >= 200 && status.id < 300) {
                    weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-bolt"></i>'
                } else if (status.id >=300 && status.id < 400) {
                    weatherIcon.innerHTML = '<i class="fa-solid fa-droplet"></i>'
                } else if (status.id >= 400 && status.id < 500) {
                    weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>'
                } else if (status.id >= 500 && status.id < 600) {
                    weatherIcon.innerHTML = '<i class="fa-regular fa-snowflake"></i>'
                } else if (status.id >= 600 && status.id < 700) {
                    weatherIcon.innerHTML = '<i class="fa-solid fa-smog"></i>'
                } else if (status.id >= 700 && status.id < 800) {
                    weatherIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'
                } else if (status.id >= 800 && status.id < 900) {
                    weatherIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>'
                } else {
                    weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>'
                }
        
                temperature.textContent = Math.floor(temp) + "°C"

            }).catch(() => {
                cityName.textContent = "Pogoda jest teraz niedostępna"
                temperature.textContent = ""
                weatherIcon.textContent = ""
            })
        }

        getWeather()
    })
})

popupBtn.addEventListener("click", closePopup)