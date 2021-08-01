import './home.css'
import { Logo } from '../../components/logo/Logo'

export const Home = () => (
    <div className='content--wrap'>
        <Logo />
        <div className='content--social-media'>
            <a href=''><img src='https://image.flaticon.com/icons/png/512/25/25325.png' alt='LinkedIn'></img></a>
            <a href=''><img src='https://image.flaticon.com/icons/png/512/733/733609.png' alt='GitHub'></img></a>
        </div>
        <div className='info--wrap'>
            <div className='info--name'>
                <h1 className='info--main-name'>Hi, I'm Antonio Goeminne</h1>
                <h3 className='info--job'>Frontend Developer</h3>
            </div>
            <div className='info--links'>
                <p>Proyects</p>
                <p>Contact me</p>
                <p>About me</p>
            </div>
        </div>

    </div>
)
