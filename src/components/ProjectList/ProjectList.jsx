import { Logo } from "../logo/Logo"
import { SocialMedia } from "../SocialMedia/SocialMedia"
import { Project } from "../project/Project"
import { useEffect } from "react"
import anime from 'animejs'
import './projectList.css'

export const ProjectList = ({projects}) => {
 
    return(
    <div className='content--projects-wrap'>
    <Logo />
    <SocialMedia />
    <div className='project--personal-info'> 
    <h1 className='project--title'>Projects</h1>
            <p>I started Frontend Development in 2020. This portfolio is a way to show my works</p>
            </div>
    <div className='projects--wrap'>
        {projects.map((project) => {
            return <Project key={project.id} project={project}></Project>
        }
        )}
    </div>
    
</div>
    )   
}
