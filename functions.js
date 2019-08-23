var contenido = document.querySelector('#contenido')

function traerSwapi() {
    fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido.innerHTML = `
        <p> Bievenido a Swapi - API OFICIAL DE STARWARS </p>  
        <p> Datos que contiene la API </p>   
        <li>peliculas </li> 
        <li>Planetas </li>  
        <li>Especies </li>  
        <li>Naves Espaciales </li>  
         
        `
        })

}
var contenido = document.querySelector('#contenido')

function traerPeople() {

    fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido.innerHTML = `
        <h1>Nombre: ${data.results[0].name}</h1>
        <p>Creado: ${data.results[0].created}</p>
        <p>Statura: ${data.results[0].height}</p>
        <p>Peso: ${data.results[0].mass}</p>
        <p>Color de Pelo: ${data.results[0].hair_color}</p>

        <h1>Nombre: ${data.results[1].name}</h1>
        <p>Creado: ${data.results[1].created}</p>
        <p>Statura: ${data.results[1].height}</p>
        <p>Peso: ${data.results[1].mass}</p>
        <p>Color de Pelo: ${data.results[1].hair_color}</p>

        <h1>Nombre: ${data.results[2].name}</h1>
        <p>Creado: ${data.results[2].created}</p>
        <p>Statura: ${data.results[2].height}</p>
        <p>Peso: ${data.results[2].mass}</p>
        <p>Color de Pelo: ${data.results[2].hair_color}</p>

        <h1>Nombre: ${data.results[3].name}</h1>
        <p>Creado: ${data.results[3].created}</p>
        <p>Statura: ${data.results[3].height}</p>
        <p>Peso: ${data.results[3].mass}</p>
        <p>Color de Pelo: ${data.results[3].hair_color}</p>

        <h1>Nombre: ${data.results[4].name}</h1>
        <p>Creado: ${data.results[4].created}</p>
        <p>Statura: ${data.results[4].height}</p>
        <p>Peso: ${data.results[4].mass}</p>
        <p>Color de Pelo: ${data.results[4].hair_color}</p>

        <h1>Nombre: ${data.results[5].name}</h1>
        <p>Creado: ${data.results[5].created}</p>
        <p>Statura: ${data.results[5].height}</p>
        <p>Peso: ${data.results[5].mass}</p>
        <p>Color de Pelo: ${data.results[5].hair_color}</p>
               
        `
        })

}

function traerPlanets() {

    fetch('https://swapi.co/api/planets/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido.innerHTML = `
        <h1>Nombre: ${data.results[0].name}</h1>
        <p>Creado: ${data.results[0].created}</p>
        <p>diametro: ${data.results[0].diameter}</p>
        <p>Poblacion: ${data.results[0].population}</p>
        <p>Dias de Año: ${data.results[0].orbital_period}</p>

        <h1>Nombre: ${data.results[1].name}</h1>
        <p>Creado: ${data.results[1].created}</p>
        <p>diametro: ${data.results[1].diameter}</p>
        <p>Poblacion: ${data.results[1].population}</p>
        <p>Dias de Año: ${data.results[1].orbital_period}</p>

        <h1>Nombre: ${data.results[2].name}</h1>
        <p>Creado: ${data.results[2].created}</p>
        <p>diametro: ${data.results[2].diameter}</p>
        <p>Poblacion: ${data.results[2].population}</p>
        <p>Dias de Año: ${data.results[2].orbital_period}</p>

        <h1>Nombre: ${data.results[3].name}</h1>
        <p>Creado: ${data.results[3].created}</p>
        <p>diametro: ${data.results[3].diameter}</p>
        <p>Poblacion: ${data.results[3].population}</p>
        <p>Dias de Año: ${data.results[3].orbital_period}</p>

        <h1>Nombre: ${data.results[4].name}</h1>
        <p>Creado: ${data.results[4].created}</p>
        <p>diametro: ${data.results[4].diameter}</p>
        <p>Poblacion: ${data.results[4].population}</p>
        <p>Dias de Año: ${data.results[4].orbital_period}</p>
               
        `
        })

}

function traerFilms() {

    fetch('https://swapi.co/api/films/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido.innerHTML = `
        <h1>Nombre: ${data.results[0].title}</h1>
        <p>Descripcion: ${data.results[0].opening_crawl}</p>
        <p>Director: ${data.results[0].director}</p>
        <p>Productor: ${data.results[0].producer}</p>
        <p>Extreno en: ${data.results[0].release_date}</p>              
        
        <h1>Nombre: ${data.results[1].title}</h1>
        <p>Descripcion: ${data.results[1].opening_crawl}</p>
        <p>Director: ${data.results[1].director}</p>
        <p>Productor: ${data.results[1].producer}</p>
        <p>Extreno en: ${data.results[1].release_date}</p>

        <h1>Nombre: ${data.results[2].title}</h1>
        <p>Descripcion: ${data.results[2].opening_crawl}</p>
        <p>Director: ${data.results[2].director}</p>
        <p>Productor: ${data.results[2].producer}</p>
        <p>Extreno en: ${data.results[2].release_date}</p>

        <h1>Nombre: ${data.results[3].title}</h1>
        <p>Descripcion: ${data.results[3].opening_crawl}</p>
        <p>Director: ${data.results[3].director}</p>
        <p>Productor: ${data.results[3].producer}</p>
        <p>Extreno en: ${data.results[3].release_date}</p>
               
        `
        })

}

function traerEspecies() {

    fetch('https://swapi.co/api/species/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido.innerHTML = `
        <h1>Nombre: ${data.results[0].name}</h1>
        <p>classificacion: ${data.results[0].classification}</p>
        <p>Lenguaje: ${data.results[0].language}</p>
        <p>Color de Piel: ${data.results[0].skin_colors}</p>
        <p>Planeta: ${data.results[0].homeworld}</p>              
        
        <h1>Nombre: ${data.results[1].name}</h1>
        <p>classificacion: ${data.results[1].classification}</p>
        <p>Lenguaje: ${data.results[1].language}</p>
        <p>Color de Piel: ${data.results[1].skin_colors}</p>
        <p>Planeta: ${data.results[1].homeworld}</p> 

        <h1>Nombre: ${data.results[2].name}</h1>
        <p>classificacion: ${data.results[2].classification}</p>
        <p>Lenguaje: ${data.results[2].language}</p>
        <p>Color de Piel: ${data.results[2].skin_colors}</p>
        <p>Planeta: ${data.results[2].homeworld}</p> 

        <h1>Nombre: ${data.results[3].name}</h1>
        <p>classificacion: ${data.results[3].classification}</p>
        <p>Lenguaje: ${data.results[3].language}</p>
        <p>Color de Piel: ${data.results[3].skin_colors}</p>
        <p>Planeta: ${data.results[3].homeworld}</p> 

        <h1>Nombre: ${data.results[4].name}</h1>
        <p>classificacion: ${data.results[4].classification}</p>
        <p>Lenguaje: ${data.results[4].language}</p>
        <p>Color de Piel: ${data.results[4].skin_colors}</p>
        <p>Planeta: ${data.results[4].homeworld}</p>         
               
        `
        })
}


function traerNaves() {
    fetch('https://swapi.co/api/starships/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido.innerHTML = `
            <h1>Nombre: ${data.results[0].name}</h1>
            <p>Capacidad: ${data.results[0].passenger}</p>
            <p>Modelo: ${data.results[0].model}</p>
            <p>Clase de Nave: ${data.results[0].starship_class}</p>
            <p>Precio: ${data.results[0].cost_in_credits}</p>  

            <h1>Nombre: ${data.results[1].name}</h1>
            <p>Capacidad: ${data.results[1].passenger}</p>
            <p>Modelo: ${data.results[1].model}</p>
            <p>Clase de Nave: ${data.results[1].starship_class}</p>
            <p>Precio: ${data.results[1].cost_in_credits}</p> 

            <h1>Nombre: ${data.results[2].name}</h1>
            <p>Capacidad: ${data.results[2].passenger}</p>
            <p>Modelo: ${data.results[2].model}</p>
            <p>Clase de Nave: ${data.results[2].starship_class}</p>
            <p>Precio: ${data.results[2].cost_in_credits}</p> 

            <h1>Nombre: ${data.results[3].name}</h1>
            <p>Capacidad: ${data.results[3].passenger}</p>
            <p>Modelo: ${data.results[3].model}</p>
            <p>Clase de Nave: ${data.results[3].starship_class}</p>
            <p>Precio: ${data.results[3].cost_in_credits}</p> 
            
            `

        })

}