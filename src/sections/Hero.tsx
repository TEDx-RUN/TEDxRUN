import React, { useEffect, useState } from 'react'
import Button from '@/components/Button'
import solaTicket from '@/assets/solar_ticket.svg'
import rightArrow from '@/assets/rightArrow.svg'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

/* ─────────────────────────────────────────────
   Shared tsParticles config — replicates the
   red triangular mesh / constellation network
   from the design reference.
   ───────────────────────────────────────────── */
const particlesConfig: ISourceOptions = {
  fullScreen: { enable: false }, // confine canvas to its parent div
  fpsLimit: 60,
  // ── Responsive breakpoints ──────────────────────────────────────────
  // tsParticles adjusts these values based on the container's width.
  responsive: [
    {
      // Mobile  (< 640 px)
      maxWidth: 640,
      options: {
        particles: {
          number: { value: 20 },
          links: { distance: 80, width: 0.6 },
          size: { value: { min: 0.8, max: 1.8 } },
          move: { speed: 0.5 },
        },
      },
    },
    {
      // Tablet  (640 – 1024 px)
      maxWidth: 1024,
      options: {
        particles: {
          number: { value: 32 },
          links: { distance: 105, width: 0.7 },
          move: { speed: 0.6 },
        },
      },
    },
  ],
  particles: {
    number: {
      value: 48, // desktop default
      density: { enable: false },
    },
    color: {
      value: ['#FF2020', '#FF3535', '#CC1818', '#FF5050', '#FF6868'],
    },
    opacity: {
      value: { min: 0.6, max: 1.0 },
    },
    size: {
      value: { min: 1, max: 2.8 },
    },
    links: {
      enable: true,
      distance: 125,
      color: '#FF2020',
      opacity: 0.6,
      width: 0.9,
      triangles: {
        enable: true,
        color: '#FF2020',
        opacity: 0.4,
      },
    },
    move: {
      enable: true,
      speed: 0.7,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: false },
    },
  },
  detectRetina: true,
}

/* ─────────────────────────────────────────────
   Hero Section
   ───────────────────────────────────────────── */
const Hero = () => {
  const [engineReady, setEngineReady] = useState(false)

  // Initialise the tsParticles engine once on mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setEngineReady(true))
  }, [])

  return (
    <section
      id='hero'
      className='relative w-full h-screen overflow-hidden bg-[#0a0a0a]'
    >
      {/* ── Background image with strong dark overlay ── */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: "url('/assets/heroImage.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Increased from /72 → /85 to suppress brightness */}
        <div className='absolute inset-0 bg-black/70' />
      </div>

      {/* ── TOP-RIGHT tsParticles network ── */}
      {engineReady && (
        <div
          className='absolute top-0 right-0 z-10 pointer-events-none'
          style={{
            // position:relative is required for tsParticles canvas to fill correctly
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'clamp(260px, 55%, 520px)',
            height: 'clamp(200px, 55%, 480px)',
          }}
        >
          <Particles
            id='particles-top-right'
            options={particlesConfig}
            className='w-full h-full'
          />
        </div>
      )}

      {/* ── BOTTOM-LEFT tsParticles network ── */}
      {engineReady && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            zIndex: 10,
            pointerEvents: 'none',
            width: 'clamp(260px, 55%, 520px)',
            height: 'clamp(200px, 55%, 480px)',
          }}
        >
          <Particles
            id='particles-bottom-left'
            options={particlesConfig}
            className='w-full h-full'
          />
        </div>
      )}

      {/* ── Hero content ── */}
      <div
        className='relative z-20 h-full flex flex-col items-center justify-center px-6 text-center'
        style={{ paddingTop: '80px' }}
      >
        <motion.div
          className='flex flex-col items-center gap-4'
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Tagline */}
          <motion.p
            className='text-white text-2xl sm:text-3xl md:text-4xl font-bold italic leading-tight'
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            This is where people,<br />
            ideas and experiences<br />
            <span className='text-[#FF2020] not-italic'>connect.</span>
          </motion.p>

          {/* Step into the label */}
          <motion.p
            className='text-white/60 text-[14px] tracking-[0.35em] uppercase mt-1'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Step into the:
          </motion.p>

          {/* Nexus Logo — height-constrained so transparent PNG
              padding doesn't inflate the flex column height */}
          <motion.div
            className='flex items-center justify-center'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
          >
            <img
              src='/assets/nexus logo.png'
              alt='NEXUS'
              className='block object-contain'
              style={{ height: '90px', width: 'auto', maxWidth: '260px' }}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className='flex flex-col items-center gap-3 mt-2'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
          >
            <Button href='https://app.ibloov.com/event/CTZOB2ZRFrz' text='GET TICKETS' icon={solaTicket} bg />
            <Button href='' text='BECOME A SPONSOR' icon={rightArrow} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
