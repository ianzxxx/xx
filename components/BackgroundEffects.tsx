'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BackgroundEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Estrelas cintilantes */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Aurora boreal */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-transparent via-magic-blue/30 to-transparent"
          animate={{
            x: ['-100%', '100%'],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 left-0 w-full h-24 bg-gradient-to-r from-transparent via-magic-pink/20 to-transparent"
          animate={{
            x: ['100%', '-100%'],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Partículas flutuantes */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#ff6b9d', '#4ecdc4', '#45b7d1', '#feca57'][Math.floor(Math.random() * 4)],
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Efeito de mouse/touch */}
      {!isMobile && (
        <motion.div
          className="absolute w-64 h-64 rounded-full pointer-events-none"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeOut"
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-magic-pink/20 via-transparent to-transparent" />
        </motion.div>
      )}

      {/* Pétalas de rosa */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
            animate={{
              y: ['-100vh', '100vh'],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Neve mágica */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
            animate={{
              y: ['-100vh', '100vh'],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 720],
              opacity: [1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ❄️
          </motion.div>
        ))}
      </div>

      {/* Gotas de água */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="water-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
            animate={{
              y: [0, -30],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Trilhas mágicas */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="magic-trail"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#ff6b9d', '#4ecdc4', '#45b7d1', '#feca57'][Math.floor(Math.random() * 4)],
            }}
            animate={{
              scale: [1, 0],
              opacity: [1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Efeito de gradiente dinâmico */}
      <div className="absolute inset-0 bg-gradient-cosmic opacity-50" />
      
      {/* Overlay de brilho */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
    </div>
  )
}

export default BackgroundEffects 