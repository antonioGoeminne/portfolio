import './technologies.css'
import { useState, useEffect } from 'react'
import anime from 'animejs'

export const Technologies = () => 

{

    useEffect(() => {
        let animationTechnologies = anime({
            targets: '.project--tech-used',
            translateY:-100,
            direction:'alternate',
            easing:'linear',
            loop:true
        })
     }, [])

const[tech, setTech] = useState([

    {
        id:'tech1',
        technologie:'https://image.flaticon.com/icons/png/512/1184/1184062.png'
    },
    {
        id:'tech2',
        technologie:'https://image.flaticon.com/icons/png/512/1243/1243456.png'
    },
    {
        id:'tech3',
        technologie:'https://image.flaticon.com/icons/png/512/1147/1147208.png'
    },
    {
        id:'tech4',
        technologie:'https://static-00.iconduck.com/assets.00/firebase-icon-372x512-1lrvvni7.png'
    },
    {
        id:'tech4',
        technologie:'https://image.flaticon.com/icons/png/512/136/136448.png'
    }
])


        return(
            <div className='project--tech'>
                {tech.map((technologie) => {
               return <img className='project--tech-used' key={technologie.id} src={technologie.technologie} alt='technologie' ></img>
                })
}
            </div>
        )
}
