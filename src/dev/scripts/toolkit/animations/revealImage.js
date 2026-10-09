import { animate, eases } from 'animejs';

const { inOutCirc } = eases;

export function revealImage(trHide, breakpoint, delay) {
  if(window.config.width > breakpoint) {
    let duration = 400
    /* First thing: a11y */
    if(window.config.prefersReducedMotion) {
      duration = 0
    }

    trHide.parentNode.style.display = 'initial'

    animate(trHide , {
      translateY: ['0%', '-100%'],
      easing: 'outQuart',
      duration: duration,
      delay: delay,
      onComplete: () => {
        trHide.parentNode.style.display = 'none'
      }
    })
  } else {
    trHide.parentNode.style.display = 'none'
  }
}
