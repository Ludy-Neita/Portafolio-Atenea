
import chakraImage from "../images/techs/chakra.png"; //
import cssImage from "../images/techs/css.png";//
//import nextImage from "../images/techs/next.png"; //
import reactBootstrapImage from "../images/techs/react-bootstrap.png"; //
import reactRouterdomImage from "../images/techs/react-router-dom.png"; //
import reactImage from "../images/techs/react.png";//
import sassImage from "../images/techs/sass.png"; //
import semanticImage from "../images/techs/semantic.png"; //
import styledImage from "../images/techs/styled-logo.png"; //
import viteImage from "../images/techs/vite.png";//
import criptomonedaImage from "../images/projects/crypto.jpeg";
import dynamicFormProject from "../images/projects/dynamic.jpeg";//
import gasolineraProject from "../images/projects/gasolinera.jpeg";//
import marvelProject from "../images/projects/marvel.jpeg";//
import rickMorty from "../images/projects/rick-morty.jpeg";
import simpsonProject from "../images/projects/simpson.jpeg";
import tareasProject from "../images/projects/todo.jpeg";

export const projectsPortfolio = [
    
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
            {name:"React", src:reactImage},
            {name:"CSS",   src:cssImage  },
        ],
        description: "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
        repository: "https://github.com/Ludy-Neita/Rickand-Morty",
        website:"https://649215494d51dd053e5d92e4--peaceful-croquembouche-0f1caa.netlify.app/"
    },
    {
        title: "Todo list",
        image: tareasProject,
        techs: [
            {name:"React", src:reactImage},
            {name:"Semantic UI React",   src:semanticImage  },
        ],
        description: "Application created with React JS and to make a list of tasks where you can add or remove it.",
        repository: "https://github.com/Ludy-Neita/Gestortareas-Lu",
        website:"https://649210839d92d200b2589364--stellar-longma-54a158.netlify.app/"
    },
    {
        title: "Simpsons API",
        image: simpsonProject,
        techs: [
            {name:"React JS", src:reactImage},
            {name:"Styled Components",   src:styledImage  },
        ],
        description: "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
        repository: "https://github.com/Ludy-Neita/PhraseSimpson",
        website:"https://6492142f4d51dd04d55d91f6--unrivaled-dasik-e608bf.netlify.app/" 
    },
    {
        title: "Marvel API",
        image: marvelProject,
        techs: [
            {name:"React", src:reactImage},
            {name:"React Router",   src:reactRouterdomImage  },
            {name:"Sass",   src:sassImage  },
            {name:"Semantic",   src:semanticImage  },
        ],
        description: "Application created with React JS, React-Router and Sass to make a request an external API of Marvel.",
        repository: "https://github.com/Ludy-Neita/Marvel",
        website:"https://649213b133fff900c67d593e--mellow-fairy-0f2e61.netlify.app/comics" 
    },
    {
        title: "Dynamic Form",
        image: dynamicFormProject,
        techs: [
            {name:"React JS", src:reactImage},
            {name:"React Bootstrap",   src:reactBootstrapImage  },
        ],
        description: "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
        repository: "https://github.com/Ludy-Neita/Formulario-Dinamico",
        website:"https://64920ff534d0d8007e1a2446--scintillating-semolina-7e3ff1.netlify.app/" 
    },
    {
        title: "Fuel Station",
        image: gasolineraProject,
        techs: [
            {name:"Vite", src:viteImage},
            {name:"Chakra",   src:chakraImage  },
            {name:"React Router DOM",   src:reactRouterdomImage  },
        ],
        description: "Application created with Vite where you can save the information and see it on a summary.",
        repository: "https://github.com/Ludy-Neita/Gasolinera",
        website:"https://64925fdf3e574803dcde91d8--vermillion-cupcake-a02768.netlify.app/"
    },
    {
        title: "Cryptocurrency",
        image: criptomonedaImage,
        techs: [
            {name:"Vite", src:viteImage},
            {name:"Chakra",   src:chakraImage  },
            {name:"React Router DOM",   src:reactRouterdomImage  },
        ],
        description: "Application created with Vite where you'll can convert currencies to crypto",
        repository: "https://github.com/Ludy-Neita/Cripto-Monedas",
        website:"https://64966a2ee8a7731e24b0bcdd--boisterous-cactus-2fa4b0.netlify.app/"
    },

    
];