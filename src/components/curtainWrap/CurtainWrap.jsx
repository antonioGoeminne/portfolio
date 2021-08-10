import { useEffect } from 'react';
import anime from 'animejs';
import './curtainWrap.css';

export const CurtainWrap = ({message }) =>{
  useEffect(() => {
    const animationCurtain = anime({
      targets: '.wrap--curtain',
      translateY: '-1500',
      delay: '1000ms',
      easing: 'cubicBezier(0.235, 0.115, 0.820, 0.085);'
    });
    const animationText = anime({
      targets: '.curtain--text__secondary',
      opacity:0,
      easing: 'easeOutQuint',
      delay:'600ms'
    });
  }, []);



  return (
    <div className="wrap--curtain" >
      <p className="curtain--text">{message}</p>
      <p className="curtain--text__secondary">{message}</p>

    </div>
  );
}
