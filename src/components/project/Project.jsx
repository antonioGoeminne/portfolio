import './project.css'

export const Project = ({project}) => {
    let styleDiv = {
        backgroundImage: `url(${project.picture})`,
        backroundSize: 'cover'
    }
    return(
        <a href={project.link} target='_blank'>
    <div className='project--wrap' id={project.id}>
        <div className='project--picture' style={styleDiv}></div>
        <div className='project--info'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>
        <div className='project--info_technologies'>
            {project.technologies}
        </div>
    </div>
    </a>
    )
}
