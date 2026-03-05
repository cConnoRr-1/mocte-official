import { useMemo, useState, useEffect, useCallback, useRef } from 'react'
import { GridScan, GridMotion } from './components'
import './App.css'

const LETTERS = ['M', 'Ø', 'C', 'T', 'E']

const LETTER_TARGETS = [
  { left: 92, top: 92 },   // M → bottom right
  { left: 8, top: 8 },     // Ø → top left
  { left: 50, top: 92 },   // C → bottom center (parallel to M, E), rotated 90°
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
  const scrollRef = useRef(null)

  const updateProgress = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    const maxScroll = scrollHeight - clientHeight
    const progress = maxScroll <= 0 ? 0 : Math.min(1, scrollTop / maxScroll)
    setScrollProgress(progress)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateProgress()
    el.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      el.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [updateProgress])

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
    <div className="scroll-driver" ref={scrollRef}>
      <div className="scroll-spacer" aria-hidden="true" />
      <div className="page-wrapper">
        <GridMotion gradientColor="black" />
        <div className="gridscan-backdrop">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#7FDBDA"
            gridScale={0.1}
            scanColor="#FFEB3B"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            scrollProgress={t}
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
                const left = lerp(start.left, end.left, letterPhase)
                const top = lerp(start.top, end.top, letterPhase)
                const scale = lerp(1, LETTER_SCALE_END, letterPhase)
                const rotate = isC ? letterPhase * 90 : 0
                return (
                  <span
                    key={i}
                    className="title-letter title-letter--scroll"
                    style={{
                      animationDelay: `${letterDelays[i]}s`,
                      '--letter-left': `${left}%`,
                      '--letter-top': `${top}%`,
                      '--letter-scale': scale,
                      '--letter-rotate': `${rotate}deg`,
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
        </div>
      </div>
    </div>
  )
}

export default App
