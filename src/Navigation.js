import { lowerCase } from 'lodash';

function buildLinks(links){
    var result = '';
    var i = 0;
    var link = '/';

    while(i < links.length){
        if(links[i] !== 'Home'){
            link += lowerCase(links[i]);
        }

        result += `<li><a href="${link}" data-navigo>${links[i]}</a></li>`;

        link = '/';
        
        i++;
    }

    return result;
}

export default function Navigation(state){
    console.log(lowerCase);
    
    return `
        <div id="navigation">
            <ul class="container"> 
                ${buildLinks(state.links)}
            </ul>
        </div>
    `;
}