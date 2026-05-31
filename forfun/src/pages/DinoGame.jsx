import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './DinoGame.css'

const BASE = import.meta.env.BASE_URL  // e.g. "/forfun/"

function injectResources() {
  if (document.getElementById('offline-resources')) return

  const icon = document.createElement('div')
  icon.className = 'icon icon-offline'
  icon.style.display = 'none'
  document.body.appendChild(icon)

  const container = document.createElement('div')
  container.id = 'offline-resources'
  container.style.display = 'none'
  ;['1x', '2x'].forEach(scale => {
    const img = document.createElement('img')
    img.id = `offline-resources-${scale}`
    img.src = `${BASE}offline-resources-${scale}.png`
    container.appendChild(img)
  })
  document.body.appendChild(container)

  const tmpl = document.createElement('template')
  tmpl.id = 'audio-resources'
  tmpl.innerHTML = [
    `<audio id="offline-sound-press"   src="${BASE}sounds/button-press.mp3"></audio>`,
    `<audio id="offline-sound-hit"     src="${BASE}sounds/hit.mp3"></audio>`,
    `<audio id="offline-sound-reached" src="${BASE}sounds/score-reached.mp3"></audio>`,
  ].join('')
  document.body.appendChild(tmpl)
}

function removeResources() {
  document.getElementById('offline-resources')?.remove()
  document.querySelector('.icon.icon-offline')?.remove()
  document.getElementById('audio-resources')?.remove()
}

let offlineModule = null

export default function DinoGame() {
  const outerRef = useRef(null)

  useEffect(() => {
    const el = outerRef.current
    if (!el) return

    let cancelled = false
    el.id = 'dino-game-outer'
    el.innerHTML = ''
    document.documentElement.classList.add('offline')
    injectResources()

    import('../dino_game/offline.ts').then(m => {
      if (cancelled) return
      offlineModule = m
      m.destroyInstance()
      try {
        m.Runner.initializeInstance('#dino-game-outer')
        window.Runner = m.Runner
      } catch (err) {
        console.error('Dino Runner init failed:', err)
      }
    })

    return () => {
      cancelled = true
      document.documentElement.classList.remove('offline')
      removeResources()
      offlineModule?.destroyInstance()
      el.innerHTML = ''
    }
  }, [])

  return (
    <div className="dino-page">
      <Link className="back-link" to="/">← All games</Link>
      <div
        ref={outerRef}
        className="dino-outer"
        aria-label="Dino Game"
      />
    </div>
  )
}
