import { Fragment } from "react"
import { CurtainWrap } from "../../components/curtainWrap/CurtainWrap"
import { ProjectsContainer } from "../../components/ProjectsContainer/ProjectsContainer"


export const Projects = () => {
    return(
    <Fragment>
        <CurtainWrap message='projects'/>
        
        <ProjectsContainer />
        
    </Fragment>
    )
}
