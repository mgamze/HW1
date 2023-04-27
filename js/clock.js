// Isim alma ve yazdirma
let username = prompt('Adiniz?')
let text = document.querySelector('#myName')
text.innerHTML = username.charAt(0).toUpperCase() + username.slice(1)

// Tarih ve saat 
function showTime() {
    let myClock = document.querySelector('#myClock')
    let now = new Date()
    let day = now.getDate()
    let month = now.getMonth()+1
    let year = now.getFullYear()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    let dateTime = `${day}/${month}/${year} ${hour}:${minute}:${second}`
    myClock.innerHTML = dateTime

    setTimeout(showTime,1000)

}

showTime()