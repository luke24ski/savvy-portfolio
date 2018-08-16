import * as Pages from './Pages';

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