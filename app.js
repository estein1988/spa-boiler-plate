import { routeChange } from './router.js'

function error404(){
    return `<h1>THIS IS YOUR ERROR PAGE</h1>`
}

window.addEventListener('load', routeChange)
window.addEventListener('hashchange', routeChange)