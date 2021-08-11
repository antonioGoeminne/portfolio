import './home.css'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/logo/Logo'
import {CurtainWrap} from '../../components/curtainWrap/CurtainWrap'
import { SocialMedia } from '../../components/SocialMedia/SocialMedia'

export const Home = () => (
    <div className='content--wrap'>
        <CurtainWrap message='Welcome'/>
        <Logo />
       <SocialMedia />
        <div className='info--wrap'>
            <div className='info--name'>
                <h1 className='info--main-name'>Hi, I'm Antonio Goeminne</h1>
                <h3 className='info--job'>Frontend Developer</h3>
            </div>
            <div className='info--links'>
                <Link to='/projects'><p>Projects</p></Link>
                <Link to='/contact'><p>Contact me</p></Link>
            </div>
        </div>

    </div>
)
