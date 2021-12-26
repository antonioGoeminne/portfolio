import { ProjectList } from '../ProjectList/ProjectList'
import notas from '../../assets/img/notas.png'
import tienda from '../../assets/img/tienda.png'
import { useState } from 'react'

export const ProjectsContainer = () => {
  const[projectInfo, setProjectInfo] = useState([{
    
      id:1,
      picture:notas,
      title:'Creador de Notas',
      description:'Designed with Jquery and Vainilla Javascript, using LocalStorage to have persistence.',
      technologies:'Jquery, Html, Css',
      link: 'https://creador-notas-goeminne-jquery-vainilla.vercel.app/'
     },
    {
      id:2,
      picture:tienda,
      title:'Tienda E-commerce',
      description:'Practising React using Firebase and Context Api to the Cart and orders from users.',
      technologies:'React, Css, Firebase',
      link:'https://antoniogoeminne.github.io/TiendReact'
    },
    {
    id:2,
    picture:Dynamai,
    title:'Web Dynamai',
    description:'Trabajo colaborativo con diseñadores y programadores para crear la web de una Ong sobre la primera infancia.',
    technologies:'React, Sass, Firebase, TailWind',
    link:'https://dynamaiapp.org/'
  },
         ])
    return(
      <ProjectList projects={projectInfo}></ProjectList>
    )
}
