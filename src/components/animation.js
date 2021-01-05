import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export const fadeAnimation = ({ parent, nodes, direction }) => {
  gsap.to(parent, { visibility: "visible", duration: 0 })
  gsap.from(nodes, {
    duration: 1,
    y: direction === "up" ? 20 : -20,
    opacity: 0,
    delay: 0.5,
    ease: "power3.inOut",
    stagger: {
      amount: 0.15,
    },
  })
}

export function animateFrom(elem, direction) {
  direction = direction | 1

  var x = 0,
    y = direction * 100
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100
    y = 0
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100
    y = 0
  }
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1,
      delay: 0.3,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  )
}

export function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 })
}

export const ScrollAnimation = array => {
  if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
  }

  array.forEach(function (elem) {
    hide(elem) // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem)
      },
      onEnterBack: function () {
        animateFrom(elem, -1)
      },
      onLeave: function () {
        hide(elem)
      }, // assure that the element is hidden when scrolled into view
    })
  })
}

export const loadingAnimation = (nodes, setLoading) => {
  gsap.to(nodes, {
    duration: 1.5,
    top: "-100%",
    delay: 0.3,
    ease: "power3.inOut",
    stagger: {
      amount: 0.5,
    },
    onComplete: () => setLoading(false),
  })
}
