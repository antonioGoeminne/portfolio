import { Logo } from "../../components/logo/Logo"
import { CurtainWrap } from "../../components/curtainWrap/CurtainWrap"
import { SocialContact } from "../../components/SocialContact/SocialContact"
import { useState } from "react"
import './contact.css'


export const Contact = () => {

const[clicked, setClicked] = useState(false)

    return(
    <div className='contact--wrap'>
        <CurtainWrap message='Contact me'/>
        <Logo />
        
        {clicked === false ? <div className='contact--text' onClick={() => setClicked(true)}> <h2>I will glad to speak with you. </h2><h2>Feel free to contact me</h2> </div> : <SocialContact />}
        
    </div>
    )
}
