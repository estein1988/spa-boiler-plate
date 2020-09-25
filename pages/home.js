import User from '../components/user.js'

export default function HomePage(user){
    return (`
    <section>
    <nav>
        <a href="#">HOME</a>
        <a href="#/about">ABOUT</a>
        <a href="#/contact">CONTACT</a>
    </nav>
        <h1>HOME PAGE</h1>
        ${User(user)}
    </section> 
    `)
}
