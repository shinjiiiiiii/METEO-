const token = import.meta.env.VITE_API_KEY
const form = document.getElementById('form')
const champ = document.getElementById('champ')
const cont = document.getElementById('contener')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${champ.value}&appid=${token}`).then((req)=>{
        return req.json()
    }).then((res)=>{
        console.log(res)

        


        let div = document.createElement('div')
        let titre = document.createElement('p')
        let poubelle = document.createElement('img')
        let degres = document.createElement('h2')
        let image = document.createElement('img')
        let temp = document.createElement('p')
        let div2 = document.createElement('span')
        let chaleur = res.wind.deg;


        cont.appendChild(div)

        div.appendChild(poubelle)
        div.appendChild(titre)
        div.appendChild(degres)
        div.appendChild(image)
        div.appendChild(temp)
    
        poubelle.src = 'trash.svg'
        poubelle.style.height = '5%'
        poubelle.style.marginLeft = '88%'
        poubelle.style.marginTop = '3%'
        titre.style.color = 'blue'
        titre.innerHTML = res.name
        titre.style.marginLeft = '15%'
        titre.style.marginTop = '10%'
        titre.style.fontSize = '1.3em'
        degres.textContent = chaleur /10 
        degres.style.fontSize = '4.5em'
        degres.style.marginTop = '10%'
        degres.style.marginLeft = '10%'
        temp.style.marginLeft = '15%'
        temp.style.color = 'blue' 
        temp.textContent = res.weather[0].main



        poubelle.addEventListener('click',()=>{
            div.remove()
        })


        image.src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`

    })
})

