import './socialContact.css'

export const SocialContact = () => (
    <div className='social--contact-wrap'>
        <h3 className='social--contact-title'>These are my social media</h3>
        <div className='social--contact-media_wrap'>
        <a className='social--contact-mail' href='mailto:antonionicolas3003@gmail.com' target='_blank'>antonionicolas3003@gmail.com</a>
        <a href='https://www.linkedin.com/in/antonio-goeminne-b760561b6/'><img src='https://image.flaticon.com/icons/png/512/25/25325.png' alt='linkedIn'></img></a>
        <a href='https://github.com/antonioGoeminne/antonioGoeminne'><img src='https://image.flaticon.com/icons/png/512/733/733609.png' alt='GitHub'></img></a>
        <a href='https://dev.to/antonio_goeminne' className='dev-to'>Dev</a>
        </div>
    </div>
)
