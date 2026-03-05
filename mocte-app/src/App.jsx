import { useMemo, useState, useEffect, useCallback, useRef } from 'react'
import { GridScan, GridMotion } from './components'
import './App.css'

const LETTERS = ['M', 'Ø', 'C', 'T', 'E']
const COMING_SOON_LETTERS = ['C', 'Ø', 'M', 'I', 'N', 'G', ' ', 'S', 'Ø', 'Ø', 'N']

const LETTER_TARGETS = [
  { left: 92, top: 92 },   // M → bottom right
  { left: 8, top: 8 },     // Ø → top left
  { left: 50, top: 87 },   // C → bottom center, 5% higher when shrunk
  { left: 92, top: 8 },    // T → top right
  { left: 8, top: 92 },    // E → bottom left
]

const LETTER_STARTS = [
  { left: 32, top: 50 },  // M
  { left: 41.25, top: 50 },  // Ø
  { left: 50, top: 50 },  // C
  { left: 58, top: 50 },  // T
  { left: 65, top: 50 },  // E
]

function lerp(a, b, t) {
  return a + (b - a) * t
}

function App() {
  const letterDelays = useMemo(
    () => LETTERS.map(() => Math.random() * 2.5),
    []
  )
  const [scrollProgress, setScrollProgress] = useState(0)
  const [cExploded, setCExploded] = useState(false)
  const scrollRef = useRef(null)
  const scrollBackRequestedRef = useRef(false)

  const updateProgress = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    const maxScroll = scrollHeight - clientHeight
    const progress = maxScroll <= 0 ? 0 : Math.min(1, scrollTop / maxScroll)
    setScrollProgress(cExploded ? 1 : progress)
  }, [cExploded])

  const [showComingSoonTitle, setShowComingSoonTitle] = useState(false)
  useEffect(() => {
    if (!cExploded) return
    const id = window.setTimeout(() => setShowComingSoonTitle(true), 3000)
    return () => clearTimeout(id)
  }, [cExploded])

  const goHome = useCallback(() => {
    scrollBackRequestedRef.current = true
    setCExploded(false)
    setShowComingSoonTitle(false)
  }, [])

  useEffect(() => {
    if (!cExploded && scrollBackRequestedRef.current) {
      scrollBackRequestedRef.current = false
      const el = scrollRef.current
      if (!el) return
      const startTop = el.scrollTop
      const duration = 800
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        const ease = 1 - (1 - t) * (1 - t)
        el.scrollTop = startTop * (1 - ease)
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
  }, [cExploded])

  const comingSoonFlickerParams = useMemo(
    () => COMING_SOON_LETTERS.map(() => ({
      duration: 2.2 + Math.random() * 2.4,
      delay: Math.random() * 2.5
    })),
    []
  )

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    if (cExploded) {
      el.scrollTop = el.scrollHeight - el.clientHeight
    }
    updateProgress()
    const onScroll = () => {
      if (cExploded) {
        const maxScroll = el.scrollHeight - el.clientHeight
        if (el.scrollTop < maxScroll) el.scrollTop = maxScroll
      }
      updateProgress()
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateProgress)
    }
  }, [updateProgress, cExploded])

  const t = scrollProgress
  const navTranslateY = t * -120
  const LETTER_SCALE_END = 0.5
  const LETTER_PHASE_END = 0.45
  const letterPhase = Math.min(1, t / LETTER_PHASE_END)
  // Subtext: invisible at start, appear as letters move to corners, then fade again
  const SUBTEXT_PEAK = 0.45
  const subtextOpacity =
    t <= SUBTEXT_PEAK
      ? t / SUBTEXT_PEAK
      : Math.max(0, (1 - t) / (1 - SUBTEXT_PEAK))

  return (
    <div className={`scroll-driver${cExploded ? ' scroll-driver--locked' : ''}`} ref={scrollRef}>
      <div className="scroll-spacer" aria-hidden="true" />
      <div className="page-wrapper">
        <GridMotion gradientColor="black" />
        <div className="gridscan-backdrop">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#7FDBDA"
            scanColor="#FFEB3B"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            scrollProgress={t}
            launchTriggered={cExploded}
          />
        </div>
        <div className="page-content">
          <nav
            className="navbar"
            style={{ transform: `translateY(${navTranslateY}%)` }}
          >
            <a href="#contact" className="nav-link">CØNTACT US</a>
            <button type="button" className="nav-button">PREØRDER</button>
          </nav>
          <div className="center-content center-content--scroll">
            <h1 className="title-mocte title-mocte--scroll">
              {LETTERS.map((letter, i) => {
                const start = LETTER_STARTS[i]
                const end = LETTER_TARGETS[i]
                const isC = i === 2
                const isO = i === 1
                const left = lerp(start.left, end.left, letterPhase)
                const top = lerp(start.top, end.top, letterPhase)
                const scale = isC ? lerp(1, LETTER_SCALE_END + 0.05, letterPhase) : lerp(1, LETTER_SCALE_END, letterPhase)
                const rotate = isC ? letterPhase * 90 : 0
                const exploded = isC && cExploded
                const clickableC = isC && t >= 1 && !cExploded
                const clickableO = isO && t >= 1
                return (
                  <span
                    key={i}
                    role={clickableC || clickableO ? 'button' : undefined}
                    tabIndex={clickableC || clickableO ? 0 : undefined}
                    onClick={
                      clickableC ? () => setCExploded(true) : clickableO ? goHome : undefined
                    }
                    onKeyDown={
                      clickableC
                        ? (e) => e.key === 'Enter' && setCExploded(true)
                        : clickableO
                          ? (e) => e.key === 'Enter' && goHome()
                          : undefined
                    }
                    className={`title-letter title-letter--scroll${exploded ? ' title-letter--explode' : ''}`}
                    style={{
                      animationDelay: `${letterDelays[i]}s`,
                      '--letter-left': `${left}%`,
                      '--letter-top': `${top}%`,
                      '--letter-scale': scale,
                      '--letter-rotate': `${rotate}deg`,
                      pointerEvents: clickableC || clickableO ? 'auto' : undefined,
                      cursor: clickableC || clickableO ? 'pointer' : undefined,
                    }}
                  >
                    {letter}
                  </span>
                )
              })}
            </h1>
            <div
              className="card card--scroll"
              style={{ opacity: subtextOpacity, pointerEvents: t >= 1 ? 'none' : 'auto' }}
            >
              <p>reimagining ancient traditions to our present</p>
            </div>
          </div>
          <p
            className="coming-soon coming-soon--scroll"
            style={{ opacity: 1 - t }}
          >
            CØMING SØØN . . .
          </p>
          <div
            className="launch-indicator"
            style={{
              opacity: t >= 1 && !cExploded ? 1 : 0,
              pointerEvents: t >= 1 ? 'auto' : 'none',
            }}
            aria-hidden={t < 1 || cExploded}
          >
            <span className="launch-indicator__label">LAUNCH</span>
            <div className="launch-indicator__line" />
            <div className="launch-indicator__bracket" />
          </div>
          {showComingSoonTitle && (
            <div className="coming-soon-title" aria-live="polite">
              {COMING_SOON_LETTERS.map((letter, i) => (
                <span
                  key={i}
                  className="coming-soon-title__letter-wrap"
                  style={{ animationDelay: `${i * 0.7}s` }}
                  {...(letter === ' ' ? { 'data-space': true } : {})}
                >
                  <span
                    className="title-letter coming-soon-title__letter"
                    style={{
                      animationDuration: `${comingSoonFlickerParams[i].duration}s`,
                      animationDelay: `${comingSoonFlickerParams[i].delay}s`
                    }}
                  >
                    {letter}
                  </span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
