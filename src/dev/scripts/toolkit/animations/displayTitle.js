/*
  Kindly showing the letters of a title, specified by its class name
*/
import { animate, stagger } from 'animejs';

export function displayTitle(className) {
  if(window.config.width < 800) {
    document.getElementsByClassName(className)[0].classList.add('appeared')
  } else {
    let duration = 1200
    let delayBase = 500
    let delayInc = 40
    /* First thing: a11y */
    if(window.config.prefersReducedMotion) {
      duration = 0
      delayBase = 0
      delayInc = 0
    }

    animate('.' + className + ' .letter', {
      translateX: [50,0],
      translateZ: 0,
      opacity: [0,1],
      ease: 'outExpo',
      delay: stagger(delayInc, {start: delayBase }),
      duration: duration,
    })
  }
}
