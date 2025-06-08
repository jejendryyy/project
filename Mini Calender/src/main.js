const yearName = document.getElementById("year");
const dayName = document.getElementById("day");
const monthName = document.getElementById("month");
const dateName = document.getElementById("date")

const date = new Date()
const month = date.getMonth

yearName.innerText = date.getFullYear() 

monthName.innerText = date.toLocaleString("id", {
    month:"long"
})

dateName.innerText = date.getDate()

dayName.innerText = date.toLocaleString("id", {
    weekday:"long"
})