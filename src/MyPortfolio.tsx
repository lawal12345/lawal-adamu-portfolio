import { FormEvent, useEffect, useRef, useState } from 'react'

const projects = [
  {
    number: '01',
    type: 'AI infrastructure',
    year: '2026',
    title: 'Fuse',
    description: 'An API gateway wallet and spending control plane for AI agents, enforcing hard spend caps, key isolation, and multi-provider routing.',
    tags: ['AI gateways', 'Cloudflare', 'Multi-agent'],
    className: 'project-pink',
    visual: 'orbit',
    image: '/fuse.svg',
    url: 'https://getfuse.online',
  },
  {
    number: '02',
    type: 'Mobile geofencing',
    year: '2025',
    title: 'SIWES-PRO',
    description: 'An AI-verified React Native and n8n geofencing and face-matching attendance platform designed for university integration.',
    tags: ['React Native', 'n8n', 'Geofencing'],
    className: 'project-lilac',
    visual: 'siwes',
    image: '/siwes-pro.svg',
    url: undefined,
  },
  {
    number: '03',
    type: 'Blockchain payments',
    year: '2026',
    title: 'Chaint',
    description: 'A Discord-native, non-custodial crypto payment product built around decentralised architecture.',
    tags: ['React', 'TypeScript', 'Web3'],
    className: 'project-yellow',
    visual: 'blocks',
    image: '/chaint.svg',
    url: 'https://chat-to-cashout.vercel.app/',
  },
  {
    number: '04',
    type: 'Voice AI tutoring',
    year: '2026',
    title: 'Study Buddy',
    description: 'A citation-governed voice tutor with affect-aware personas and a high-fidelity RAG pipeline.',
    tags: ['React Native', 'RAG', 'Supabase'],
    className: 'project-blue',
    visual: 'signal',
    image: '/study-buddy.svg',
    url: undefined,
  },
] as const

const commands: Record<string, string> = {
  help: 'available commands: about / work / skills / contact / clear',
  about: 'Lawal Adamu is an AI engineer, full stack developer, and cybersecurity practitioner.',
  work: 'selected work: Fuse / Study Buddy / Chaint / GuardianFlow',
  skills: 'React, React Native, TypeScript, Python, AI orchestration, RAG, cloud, security, and Web3.',
  contact: 'writing to adamulawal809@gmail.com ... opening your mail app now →',
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const items = ref.current?.querySelectorAll('.reveal')
    if (!items) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  return ref
}

function ProjectVisual({ image, title }: { image: string; title: string }) {
  return (
    <div className={`project-visual project-image${title === 'Study Buddy' ? ' study-buddy-image' : ''}`}>
      <img src={image} alt={`${title} project visual`} />
      {(title === 'Fuse' || title === 'Chaint') && (
        <span className="fuse-visit" aria-hidden="true">
          <svg viewBox="0 0 160 72" focusable="false">
            <path d="M148 36C137 12 58 9 25 24C8 32 12 52 32 59C65 71 138 63 148 36Z" />
            <path d="M148 36l-15-8M148 36l-16 7" />
          </svg>
          <span>visit site</span>
        </span>
      )}
    </div>
  )
}

function MyPortfolio() {
  const pageRef = useReveal()
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [command, setCommand] = useState('')

  function runCommand(event: FormEvent) {
    event.preventDefault()
    const value = command.trim().toLowerCase()
    if (!value) return
    if (value === 'clear') {
      setTerminalLines([])
    } else {
      setTerminalLines((lines) => [...lines, `➜ ~/now ${value}`, commands[value] ?? `command not found: ${value}. try "help".`])
      if (value === 'contact') window.location.href = 'mailto:adamulawal809@gmail.com'
    }
    setCommand('')
  }

  return (
    <div className="page-shell" ref={pageRef}>
      <div className="grain" aria-hidden="true" />
      <div className="ticker" aria-hidden="true"><div className="ticker-track">{Array.from({ length: 2 }).flatMap((_, copy) => ['AI ENGINEERING', 'SECURITY BY DESIGN', 'VOICE + RAG SYSTEMS', 'WEB3 INFRASTRUCTURE'].map((item) => <span key={`${copy}-${item}`}>{item} <b>✳</b></span>))}</div></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Lawal Adamu home"><span className="brand-mark">LA</span><span>Lawal Adamu<span className="brand-dot">.</span></span></a>
        <nav className="nav-links" aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#lab">Lab</a></nav>
        <a className="button button-dark" href="mailto:adamulawal809@gmail.com">Let's talk <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero ruled">
          <div className="hero-copy reveal"><p className="eyebrow"><span className="status-dot" /> AI engineer / full stack developer / security practitioner</p><h1>I build <span className="marker">intelligent</span> systems with an edge.</h1><p className="hero-intro">I’m Lawal Adamu, founder of Fuse. I develop AI products and secure infrastructure, turning ambitious ideas into working systems.</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <span>↓</span></a><a className="text-link" href="#about">Meet Lawal <span>↗</span></a></div></div>
          <div className="hero-art reveal reveal-delay" aria-label="Lawal Adamu portrait and developer illustration"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><img className="profile-photo" src="/lawal-adamu.jpg" alt="Lawal Adamu wearing traditional Nigerian attire" /><div className="code-card"><span className="code-line"><i>const</i> focus = <b>"build + secure"</b>;</span><span className="code-line">focus.<em>ship</em>(); <strong>→</strong></span></div><div className="hero-icon"><svg viewBox="0 0 160 160" role="img" aria-label="A pixelated lightning bolt"><path d="M92 10 32 91h39l-8 59 65-91H87z" fill="#ffcc00" stroke="#181714" strokeWidth="8" strokeLinejoin="round" /><path d="m105 23-22 31" stroke="#fff6df" strokeWidth="7" strokeLinecap="round" /></svg></div><span className="sticker sticker-left">BUILD<br />BOLDLY</span><span className="sticker sticker-right">01<br /><small>/ 04</small></span><span className="arrow-scribble">↘</span></div>
        </section>

        <section className="stats-band"><div><strong>09</strong><span>LLM providers<br />routed by Fuse</span></div><div><strong>40</strong><span>evaluation prompts<br />in Apex Guardian</span></div><div><strong>01</strong><span>global Educators Hub<br />contribution</span></div></section>

        <section id="work" className="section work-section"><div className="section-heading reveal"><p className="eyebrow">01 / Selected work</p><h2>Systems I’ve helped<br /><span className="outline-text">make real.</span></h2><p className="section-note">AI platforms, voice applications, security research, and decentralised products built for real use.</p></div><div className="project-grid">{projects.map((project) => <article
          className={`project-card ${project.className} reveal${project.url ? ' external-card' : ''}`}
          key={project.title}
          role={project.url ? 'link' : undefined}
          tabIndex={project.url ? 0 : undefined}
          onClick={project.url ? () => window.open(project.url, '_blank', 'noopener,noreferrer') : undefined}
          onKeyDown={project.url ? (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              window.open(project.url, '_blank', 'noopener,noreferrer')
            }
          } : undefined}
        ><div className="project-topline"><span>{project.number} / {project.type}</span><span>{project.year}</span></div><ProjectVisual image={project.image} title={project.title} /><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

        <section id="about" className="about-section ruled"><div className="about-stamp">LAWAL<br /><span>ADAMU</span></div><div className="about-copy reveal"><p className="eyebrow">02 / About the builder</p><h2>AI mind.<br /><span className="marker marker-lilac">Security first.</span></h2><p>I’m Lawal Adamu, an AI engineer, full stack developer, and cybersecurity practitioner studying Information Technology at Nile University of Nigeria.</p><p>I founded Fuse to help autonomous agents use compute responsibly. I also built Study Buddy, a voice tutor with citation-locked RAG, affect-aware personas, and multi-model routing. My systems work connects React Native, Cloudflare Workers, Supabase pgvector, R2 staging, and governed AI spend.</p><p>My security work covers red-team research, Mythic C2 environments, reconnaissance, and zero-trust agent design. Apex Guardian, my Microsoft Virtual Agent-a-Thon project, uses a deterministic ALLOW or DENY gatekeeper and Power Fx kill switch to defend an F1 strategy orchestrator against prompt injection. I was also selected as a global Level 3 contributor for Microsoft and Founderz Educators Hub and completed the Founderz Agent Architect programme.</p><a className="text-link" href="mailto:adamulawal809@gmail.com">Start a conversation <span>↗</span></a></div><div className="about-totem reveal reveal-delay"><div className="totem-head"><span className="eye" /><span className="eye" /><span className="mouth" /></div><div className="totem-body"><span>BUILD<br />SMART<br />STAY<br /><em>SECURE</em></span></div><span className="totem-label">LAWAL / LA-08</span></div></section>

        <section id="lab" className="lab-section"><div className="section-heading reveal"><p className="eyebrow">03 / The lab</p><h2>Experiments,<br /><span className="outline-text">systems, and ideas.</span></h2></div><div className="terminal-wrap reveal"><div className="terminal-bar"><div className="terminal-lights"><span /><span /><span /></div><span>lawal@fuse: ~/now</span><span className="terminal-status">● ready</span></div><div className="terminal-body" aria-live="polite"><p><span className="terminal-prompt">➜</span> <span className="terminal-path">~/now</span> <span className="terminal-command">cat current_focus.txt</span></p><p className="terminal-response">governed AI agents, secure systems,<br />and products that people can trust.</p><p><span className="terminal-prompt">➜</span> <span className="terminal-path">~/now</span> <span className="terminal-command">ls -la focus/</span></p><p className="terminal-response file-list">fuse/ &nbsp; study-buddy/ &nbsp; apex-guardian/<br />security-research/ &nbsp; chaint/</p>{terminalLines.map((line, index) => <p className={index % 2 ? 'terminal-response' : ''} key={`${line}-${index}`}>{line}</p>)}<p className="terminal-hint">Try <b>help</b>, <b>about</b>, <b>work</b>, <b>skills</b>, or <b>clear</b>.</p></div><form className="terminal-form" onSubmit={runCommand}><label htmlFor="terminal-input"><span className="terminal-prompt">➜</span> <span className="terminal-path">~/now</span></label><input id="terminal-input" value={command} onChange={(event) => setCommand(event.target.value)} autoComplete="off" spellCheck={false} aria-label="Terminal command" /></form></div></section>

        <section className="contact-section"><div className="contact-scribble">LET’S SHIP<br />WITH INTENT.</div><div className="contact-content reveal"><p className="eyebrow">Have a challenging idea?</p><h2>Let’s build<br /><span className="marker">what’s next.</span></h2><a className="email-link" href="mailto:adamulawal809@gmail.com">adamulawal809@gmail.com <span>↗</span></a></div><div className="contact-icon" aria-hidden="true">✦</div></section>
      </main>
      <footer className="site-footer"><span>© 2026 Lawal Adamu</span><span>AI, security, and useful systems</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

export default MyPortfolio
