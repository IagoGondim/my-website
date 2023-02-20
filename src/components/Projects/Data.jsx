import pokedex from "../../images/pokedex.jpg";
import restful from "../../images/nodetypescript.png";
import dogs from "../../images/dogs.png";
import tasks from "../../images/tasks.png";
import pokemon from "../../images/pokemon.png";
import space from "../../images/preview.jpg";

export const projectObj = [
  {
    img: pokedex,
    alt: "selfie_img",
    nameS: "Pokedex",
    title: "Pokedex",
    description:
      "Pokedex criada com HTML, CSS e Javascript puro, utilizando api PokeAPI",
    github: "https://github.com/IagoGondim/pokedex",
  },

  {
    img: dogs,
    alt: "dogs_img",
    nameS: "Dogs - Rede Social",
    title: "Dogs - Rede Social",
    description:
      "Projeto realizado no curso oferecido pela Origamid, utilizando de varias ferramentas que o React oferece. É praticamente uma rede social para cachorros semelhante ao instagram",
    github: "https://github.com/IagoGondim/course-dogs",
  },

  {
    img: space,
    alt: "taks_img",
    nameS: "Space-tourism",
    title: "Space-tourism",
    description:
      "Criação de um website com react e styled-components, com responsividade para table e mobile",
    github: "https://github.com/IagoGondim/space-tourism",
  },

  {
    img: tasks,
    alt: "taks_img",
    nameS: "Tasks",
    title: "Taks list",
    description:
      "Projeto criado com a finalidade de facilicar as minhas atividades do meu dia-dia, foram utilizados a biblioteca react, styled-components para customização e na linguagem typescript",
    github: "https://github.com/IagoGondim/tasks-list",
  },

  {
    img: restful,
    alt: "restful_img",
    nameS: "API RESTful HTTP",
    title: "API RESTful HTTP",
    description:
      "API RESTful HTTP para cadastro de clientes e endereços com contratos e eventos de contratos de clientes e pontos entre clientes e endereços, as ferramentas utilizadas nesse projeto foram node.js, typescript, postgresql, docker, typeorm e insomnia",
    github: "https://github.com/IagoGondim/API-RestFul-HTTP",
  },

  {
    img: pokemon,
    alt: "pokemon_img",
    nameS: "Listagem de Pokemons",
    title: "Listagem de Pokemons",
    description:
      "Projeto realizado em php e docker para listagem de pokemons, link do repositório e instruções de como usar no botão abaixo",
    github: "https://github.com/IagoGondim/list-pokemon",
  },
];

export const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
