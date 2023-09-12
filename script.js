const countdown = () => {
    const endDate = new Date("december 30, 2023 00:00:00").getTime()
    const now = new Date().getTime()

    const difference = endDate - now

    const seconds = 1000
    const minuts = seconds * 60
    const hours = minuts * 60
    const days = hours * 24

    let timeDays = Math.floor(difference / days)
    let timeHours = Math.floor((difference % days) / hours)
    let timeMinuts = Math.floor((difference % hours) / minuts)
    let timeSeconds = Math.floor((difference % minuts) / seconds)

    timeHours = timeHours < 10 ? "0" + timeHours : timeHours
    timeMinuts = timeMinuts < 10 ? "0" + timeMinuts : timeMinuts
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

    document.getElementById("days").innerHTML = timeDays
    document.getElementById("hours").innerHTML = timeHours
    document.getElementById("minuts").innerHTML = timeMinuts
    document.getElementById("seconds").innerHTML = timeSeconds
}
setInterval(() => {
    countdown()
}, 1000);