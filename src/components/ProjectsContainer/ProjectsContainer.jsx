import { ProjectList } from '../ProjectList/ProjectList'
import notas from '../../assets/img/notas.png'
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
      picture:'https://media.istockphoto.com/photos/business-start-up-start-new-project-or-new-idea-concept-wooden-blocks-picture-id1226700383?s=612x612',
      title:'Tienda E-commerce',
      description:'Practising React using Firebase and Context Api to the Cart and orders from users.',
      technologies:'React, Css, Firebase'
    }
    ])
    return(
      <ProjectList projects={projectInfo}></ProjectList>
    )
}
