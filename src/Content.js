import * as Pages from './Pages';
// import logo from '../assets/port_page_logo.jpg';

export default function Content(state, posts){
    return `
    <div id="content">
        <div class="contentContainer">
            <div class="container">
    ${Pages[state.body](posts)}
            </div>
        </div>
    </div>
    `;
}