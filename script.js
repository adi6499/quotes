let i = 0
let url = "https://type.fit/api/quotes",
    quotes = document.querySelector(".quotes"),
    generate = document.getElementById("generate"),
    spokes = document.querySelector(".spokes"),
    mode = document.getElementById("mode"),
    form = document.querySelector(".form"),
    close = document.getElementById("close")


generate.addEventListener("click", apiData)



async function apiData() {
    //fetch url and get data from url
    try {
        let resp = await fetch(url)
        let data = await resp.json()
        let random = Math.floor(Math.random() * data.length);

        let { text, author } = data[random]
        if (author == null) {
            spokes.innerHTML = ''
        }
        quotes.innerHTML = 'wait'
        spokes.innerHTML = ''
        setTimeout(() => {
            quotes.innerHTML = text;
            spokes.innerHTML = author

        }, 300);


    }
    catch (error) {
        quotes.innerHTML = "sorry nothing to see";
        spokes.innerHTML = ''
    }

    //condition for showing form to get message
    i++
    if (i == 5) {
        form.classList.add("formVisible")
    }
}



//mode for color changing
mode.addEventListener("input", (e) => {
    let v = e.target.value
    document.querySelector(".contain").style.filter = `hue-rotate(${v}deg)`

})

close.addEventListener("click", () => {
    form.classList.remove("formVisible")
})