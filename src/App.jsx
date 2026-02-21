import { useState } from 'react'
import TitlePage from './components/TitlePage'
import MonthTemplate from './components/MonthTemplate'
import AppendixPage from './components/AppendixPage'
import './App.css'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const DEFAULT_APPENDIX_PAGES = 10
const MIN_APPENDIX = 1
const MAX_APPENDIX = 20

function App() {
  const [title, setTitle] = useState('Garden Calendar')
  const [subtitle, setSubtitle] = useState('')
  const [appendixCount, setAppendixCount] = useState(DEFAULT_APPENDIX_PAGES)

  const appendixLabels = Array.from(
    { length: Math.max(MIN_APPENDIX, Math.min(MAX_APPENDIX, appendixCount)) },
    (_, i) => (i < 26 ? `Appendix ${String.fromCodePoint(65 + i)}` : `Appendix ${i + 1}`)
  )

  const handlePrint = () => {
    const prevTitle = document.title
    document.title = 'Garden Calendar'
    window.print()
    document.title = prevTitle
  }

  return (
    <>
      <div className="no-print config-panel">
        <header className="config-header">
          <h1>Garden Calendar</h1>
          <p>Configure your calendar, then print. The printed booklet includes a title page, all 12 months (numbered weeks), and blank appendix pages for references.</p>
        </header>
        <div className="config-form">
          <label>
            <span>Title</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Garden Calendar"
            />
          </label>
          <label>
            <span>Subtitle (optional)</span>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="e.g. 2025 • Backyard"
            />
          </label>
          <label>
            <span>Number of appendix pages</span>
            <input
              type="number"
              min={MIN_APPENDIX}
              max={MAX_APPENDIX}
              value={appendixCount}
              onChange={(e) => setAppendixCount(Number(e.target.value) || MIN_APPENDIX)}
            />
          </label>
          <button type="button" className="print-button" onClick={handlePrint}>
            Print calendar
          </button>
        </div>
      </div>

      <div className="print-content">
        <TitlePage title={title} subtitle={subtitle} />
        {MONTH_NAMES.map((name, i) => (
          <MonthTemplate key={name} monthName={name} />
        ))}
        {appendixLabels.length > 0 && (
          <>
            <section className="print-page appendix-divider" aria-hidden>
              <h2 className="appendix-divider-heading">Appendix</h2>
              <p className="appendix-divider-note">Use these pages for notes, plant lists, or other reference material.</p>
            </section>
            {appendixLabels.map((label, i) => (
              <AppendixPage key={label} label={label} pageIndex={i} />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default App
