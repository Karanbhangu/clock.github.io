const hh = document.querySelector("#hh")
const sc = document.querySelector("#sc")
const mn = document.querySelector("#mn")
setInterval(() => {
    let day = new Date();
    let hr = day.getHours() * 30;
    let ss = day.getSeconds() * 6;
    let mm = day.getMinutes() * 6;
    hh.style.transform = `rotateZ(${hr+(mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
})