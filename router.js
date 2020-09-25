import Home from './pages/home.js'
import About from './pages/about.js'

const main = document.querySelector('#page')
main.style.backgroundColor = 'red'
const user = {
    name: "Kyle"
}

export const routes = {
    '/': Home,
    '/about': About,
}

export function routeChange(event){
    const path = window.location.hash.split("#")[1] || '/'
    const page = routes[path]
    if(page){
        main.innerHTML = page(user)
    }
    else{
        main.innerHTML = error404()
    }
}