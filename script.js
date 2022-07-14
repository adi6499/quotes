let i = 0
let url = "https://type.fit/api/quotes",
    quotes = document.querySelector(".quotes"),
    generate = document.getElementById("generate"),
    spokes = document.querySelector(".spokes"),
    mode = document.getElementById("mode"),
    form = document.querySelector(".form"),
    close = document.getElementById("close"),
    imageShow = document.getElementById("imageShow"),
    contain = document.querySelector(".contain"),
    download = document.getElementById("download")


generate.addEventListener("click", apiData)



async function apiData() {
    //fetch url and get data from url
    try {
        
        let resp = await fetch(url)
        let data = await resp.json()
        let random = Math.floor(Math.random() * data.length);

        let { text, author } = data[random]
        let image = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${author.toString().trim()}&client_id=dOXPTktJLEff9quLu-fJ3K5A_BbZBQNH2n4_0BpSj7o`)
        let imageData = await image.json()
        
       
       
        quotes.innerHTML = 'wait till Loads'
        spokes.innerHTML = ''
        setTimeout(() => {
            quotes.innerHTML = text;
            spokes.innerHTML = author
            imageShow.src=imageData.results[0].urls.full
            contain.style.backgroundImage=`url(${imageData.results[0].urls.full})`
            download.href=imageData.results[0].urls.full
        }, 800);


    }
    catch (error) {
        quotes.innerHTML = "sorry nothing to see lets tap generate";
        spokes.innerHTML = ''
        imageShow.src="https://i.pinimg.com/736x/b9/86/b6/b986b6cf226b1ee047cbd709e1e826c2.jpg"
    }

    //condition for showing form to get message
    i++
    if (i == 5) {
        form.classList.add("formVisible")
    }
}





close.addEventListener("click", () => {
    form.classList.remove("formVisible")
})

