export default function Header(state){
    return `
    <div id="header">
        <div class="container">
            <h1 class="enblackify">${state.title}</h1>
            <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/18838814_1584720734871989_8223857747152282782_n.jpg?_nc_cat=0&oh=2f9fd6e3745a8edb54a555caa12d3c5e&oe=5BC08AC1" alt="my face">
            <div id="greeting"></div>
            <input type="text" />
        </div>
    </div>
    `;
}