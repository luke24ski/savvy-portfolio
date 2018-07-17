import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

var State = {
    'links': [ 'Blog', 'Contact', 'Projects' ],
    'Home': {
        'title': "Luke Siecinski's Project"
    },
    'links': [ 'Home', 'Contact', 'Projects' ],
    'Blog': {
        'title': 'Welcome to my Blog page'
    },
    'links': [ 'Home', 'Blog', 'Projects' ],
    'Contact': {
        'title': 'Contact me'
    },
    'links': [ 'Home', 'Blog', 'Contact' ],
    'Projects': {
        'title': 'Take a look at some of my projects'
    },
};

var root = document.querySelector('#root');

function render(state){
    var greeting;
    var input;
    var links;
    var i = 0;

    root.innerHTML = `
        ${Navigation}
        ${Header(state)}
        ${Content}
        ${Footer}
    `;

    greeting = document.querySelector('#greeting');
    input = document.querySelector('#header input');
    
    input.addEventListener(
        'keyup',
        (event) => greeting.innerHTML = `
            <div>
              <h3>Welcome to my home page,</h3>
              <h4>${event.target.value}</h4>
        </div>
        `
    );

    links = document.querySelectorAll('#navigation a');

    while(i < links.length){
        links[i].addEventListener(
            'click',
            (event) => {
                var page = event.target.textContent;

                event.preventDefault();

                render(State[page]);
            }
        );
        i++;
    }
}
  
render(State['Home']);