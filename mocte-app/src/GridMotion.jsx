import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './GridMotion.css'

const IMAGE_ITEMS = [
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

const GridMotion = ({ items = [], gradientColor = 'black' }) => {
  const gridRef = useRef(null)
  const blurRef = useRef(null)
  const rowLeftRefs = useRef([])
  const rowRightRefs = useRef([])
  const mouseXRef = useRef(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
  const smoothSlideRef = useRef(0)
  const shouldOpenFullyRef = useRef(false)
  const splitDelayEndRef = useRef(0)

  const totalItems = 28
  const combinedItems = (items && items.length > 0) ? items.slice(0, totalItems) : IMAGE_ITEMS.slice(0, totalItems)

  useEffect(() => {
    gsap.ticker.lagSmoothing(0)

    const triggerOpen = (e) => {
      if (e?.clientX != null) mouseXRef.current = e.clientX
      if (e?.touches?.[0]) mouseXRef.current = e.touches[0].clientX
      if (splitDelayEndRef.current === 0) {
        splitDelayEndRef.current = Date.now() + 1600
      }
      shouldOpenFullyRef.current = true
    }

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX
      triggerOpen(e)
    }

    const updateMotion = () => {
      const maxMoveAmount = 300
      const maxSlidePx = 2500
      const baseDuration = 0.8
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]

      const delayElapsed = splitDelayEndRef.current > 0 && Date.now() >= splitDelayEndRef.current
      const targetSlide = (delayElapsed && shouldOpenFullyRef.current)
        ? maxSlidePx
        : 0
      smoothSlideRef.current += (targetSlide - smoothSlideRef.current) * 0.014
      const slideAmount = Math.min(smoothSlideRef.current, maxSlidePx)
      const progress = Math.min(slideAmount / maxSlidePx, 1)

      const blurAmount = 8 * (1 - progress)
      if (blurRef.current) {
        blurRef.current.style.backdropFilter = `blur(${blurAmount}px)`
        blurRef.current.style.webkitBackdropFilter = `blur(${blurAmount}px)`
      }

      rowLeftRefs.current.forEach((el, index) => {
        if (el) {
          const direction = index % 2 === 0 ? 1 : -1
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction
          gsap.to(el, {
            x: moveAmount - slideAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto'
          })
        }
      })
      rowRightRefs.current.forEach((el, index) => {
        if (el) {
          const direction = index % 2 === 0 ? 1 : -1
          const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction
          gsap.to(el, {
            x: moveAmount + slideAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: 'power3.out',
            overwrite: 'auto'
          })
        }
      })
    }

    const removeAnimationLoop = gsap.ticker.add(updateMotion)

    const handleTrigger = (e) => triggerOpen(e)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTrigger, { passive: true })
    window.addEventListener('click', handleTrigger)
    window.addEventListener('touchstart', handleTrigger, { passive: true })
    window.addEventListener('keydown', handleTrigger)
    window.addEventListener('scroll', handleTrigger, { passive: true })
    window.addEventListener('wheel', handleTrigger, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTrigger)
      window.removeEventListener('click', handleTrigger)
      window.removeEventListener('touchstart', handleTrigger)
      window.removeEventListener('keydown', handleTrigger)
      window.removeEventListener('scroll', handleTrigger)
      window.removeEventListener('wheel', handleTrigger)
      removeAnimationLoop()
    }
  }, [])

  return (
    <div className="grid-motion-overlay noscroll" ref={gridRef}>
      <section
        className="intro"
      >
        <div className="grid-motion-blur-layer" ref={blurRef} />
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div key={rowIndex} className="row row--split">
              <div className="row__left" ref={(el) => (rowLeftRefs.current[rowIndex] = el)}>
                {[0, 1, 2, 3].map((itemIndex) => {
                  const content = combinedItems[rowIndex * 7 + itemIndex]
                  return (
                    <div key={itemIndex} className="row__item">
                      <div className="row__item-inner" style={{ backgroundColor: '#111' }}>
                        {typeof content === 'string' && content.startsWith('http') ? (
                          <div className="row__item-img" style={{ backgroundImage: `url(${content})` }} />
                        ) : (
                          <div className="row__item-content">{content}</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="row__right" ref={(el) => (rowRightRefs.current[rowIndex] = el)}>
                {[4, 5, 6].map((itemIndex) => {
                  const content = combinedItems[rowIndex * 7 + itemIndex]
                  return (
                    <div key={itemIndex} className="row__item">
                      <div className="row__item-inner" style={{ backgroundColor: '#111' }}>
                        {typeof content === 'string' && content.startsWith('http') ? (
                          <div className="row__item-img" style={{ backgroundImage: `url(${content})` }} />
                        ) : (
                          <div className="row__item-content">{content}</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="fullview" />
      </section>
    </div>
  )
}

export default GridMotion
