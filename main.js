



let btn = document.querySelector("button")
let section = document.querySelector("section")

function clickButton(event) {
    console.log("Button Clicked")
}



function starWars() {
    
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then (function(res) {
        let {residents} = res.data.results[0]
        for(let i = 0; i < residents.length; i++) {
            console.log(residents[i])
            axios.get(residents[i])
            .then (function(res) {
                let name = document.createElement("h2")
                name.textContent = res.data.name
                section.appendChild(name)
            })
        }
    })
    .catch(function(err) {
        console.log(err);
    })
}


btn.addEventListener('click', starWars)
btn.addEventListener('click', clickButton)
