import pokedex from "../../images/pokedex.jpg";
import xadrez from "../../images/xadrez.jpg";
import restful from "../../images/nodetypescript.png";
import dogs from "../../images/dogs.png";
import tasks from "../../images/tasks.png";

export const projectObj = [
  {
    img: pokedex,
    alt: "selfie_img",
    nameS: "Pokedex",
    title: "Pokedex",
    description:
      "Pokedex criada com HTML, CSS e Javascript puro, utilizando api PokeAPI",
    link: 'https://github.com/IagoGondim/pokedex'
  },

  {
    img: restful,
    alt: "restful_img",
    nameS: "API RESTful HTTP",
    title: "API RESTful HTTP",
    description:
      "API RESTful HTTP para cadastro de clientes e endereços com contratos e eventos de contratos de clientes e pontos entre clientes e endereços, as ferramentas utilizadas nesse projeto foram node.js, typescript, postgresql, docker, typeorm e insomnia",
      link: 'https://github.com/IagoGondim/API-RestFul-HTTP'
  },
  
  {
    img: tasks,
    alt: "taks_img",
    nameS: "Taks",
    title: "Taks list",
    description:
      "Projeto criado com a finalidade de facilicar as minhas atividades do meu dia-dia, foram utilizados a biblioteca react, styled-components para customização e na linguagem typescript",
      link: 'https://github.com/IagoGondim/tasks-list'
  },
];
