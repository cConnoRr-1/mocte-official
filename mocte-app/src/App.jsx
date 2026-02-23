import { useMemo } from 'react'
import GradientBlinds from './GradientBlinds'
import GridMotion from './GridMotion'
import './App.css'

const LETTERS = ['M', 'Ø', 'C', 'T', 'E']

function App() {
  const letterDelays = useMemo(
    () => LETTERS.map(() => Math.random() * 2.5),
    []
  )

  return (
    <div className="page-wrapper">
      <GridMotion gradientColor="black" />
      <div className="gradient-blinds-backdrop">
        <GradientBlinds
          gradientColors={['#000000', '#ffffff']}
          angle={30}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.4}
          spotlightSoftness={1}
          spotlightOpacity={0.7}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
      <div className="page-content">
      <nav className="navbar">
        <a href="#contact" className="nav-link">Contact us</a>
        <button type="button" className="nav-button">Preorder</button>
      </nav>
      <div className="center-content">
      <h1 className="title-mocte">
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className="title-letter"
            style={{ animationDelay: `${letterDelays[i]}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>
      <div className="card">
        <p>reimagining ancient traditions to our present</p>
      </div>
      </div>
      <p className="coming-soon">coming soon...</p>
      </div>
    </div>
  )
}

export default App
