'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AudioManagerProps {}

const AudioManager: React.FC<AudioManagerProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [showControls, setShowControls] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  
  // Lista de músicas personalizadas (URLs fictícias - você pode substituir por URLs reais)
  const musicTracks = [
    {
      name: "Música Mágica para Grazi",
      url: "/music/magical-grazi.mp3", // Substitua por URL real
      description: "Uma melodia suave e emocionante"
    },
    {
      name: "Melodia do Envelope",
      url: "/music/envelope-melody.mp3", // Substitua por URL real
      description: "Música especial para a abertura"
    },
    {
      name: "Sinfonia das Estrelas",
      url: "/music/stars-symphony.mp3", // Substitua por URL real
      description: "Harmonia celestial"
    }
  ]

  useEffect(() => {
    // Inicializar contexto de áudio
    if (typeof window !== 'undefined') {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }

    // Configurar áudio
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.loop = true
    }

    // Auto-play com interação do usuário
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        playMusic()
      }
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }

    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('touchstart', handleUserInteraction)

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }
  }, [])

  const playMusic = async () => {
    if (audioRef.current && audioContextRef.current) {
      try {
        // Resumir contexto de áudio se estiver suspenso
        if (audioContextRef.current.state === 'suspended') {
          await audioContextRef.current.resume()
        }
        
        await audioRef.current.play()
        setIsPlaying(true)
        
        // Fade in suave
        fadeInVolume()
      } catch (error) {
        console.log('Erro ao tocar música:', error)
      }
    }
  }

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  const fadeInVolume = () => {
    if (audioRef.current) {
      let currentVolume = 0
      const targetVolume = volume
      const fadeInterval = setInterval(() => {
        if (currentVolume < targetVolume) {
          currentVolume += 0.01
          audioRef.current!.volume = currentVolume
        } else {
          clearInterval(fadeInterval)
        }
      }, 50)
    }
  }

  const fadeOutVolume = () => {
    if (audioRef.current) {
      let currentVolume = volume
      const fadeInterval = setInterval(() => {
        if (currentVolume > 0) {
          currentVolume -= 0.01
          audioRef.current!.volume = currentVolume
        } else {
          clearInterval(fadeInterval)
          pauseMusic()
        }
      }, 50)
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % musicTracks.length)
    if (audioRef.current) {
      audioRef.current.src = musicTracks[(currentTrack + 1) % musicTracks.length].url
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + musicTracks.length) % musicTracks.length)
    if (audioRef.current) {
      audioRef.current.src = musicTracks[(currentTrack - 1 + musicTracks.length) % musicTracks.length].url
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }

  const toggleControls = () => {
    setShowControls(!showControls)
  }

  return (
    <>
      {/* Áudio de fundo */}
      <audio
        ref={audioRef}
        src={musicTracks[currentTrack].url}
        preload="metadata"
        onEnded={() => nextTrack()}
        onError={(e) => console.log('Erro no áudio:', e)}
      />

      {/* Controles de áudio flutuantes */}
      <div className="fixed top-4 right-4 z-50">
        {/* Botão de toggle dos controles */}
        <motion.button
          onClick={toggleControls}
          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 
                     text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-xl">
            {showControls ? '🎵' : '🎶'}
          </span>
        </motion.button>

        {/* Painel de controles */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-16 right-0 w-80 bg-white/10 backdrop-blur-xl rounded-2xl 
                         border border-white/20 p-6 shadow-2xl"
            >
              {/* Título */}
              <h3 className="text-white font-semibold text-lg mb-4 text-center">
                🎵 Controle de Música
              </h3>

              {/* Informações da música atual */}
              <div className="bg-white/10 rounded-xl p-4 mb-4">
                <p className="text-white font-medium text-sm">
                  {musicTracks[currentTrack].name}
                </p>
                <p className="text-white/70 text-xs mt-1">
                  {musicTracks[currentTrack].description}
                </p>
              </div>

              {/* Controles de reprodução */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.button
                  onClick={prevTrack}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ⏮️
                </motion.button>

                <motion.button
                  onClick={isPlaying ? pauseMusic : playMusic}
                  className="w-12 h-12 bg-magic-pink rounded-full flex items-center justify-center text-white shadow-magic"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </motion.button>

                <motion.button
                  onClick={nextTrack}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ⏭️
                </motion.button>
              </div>

              {/* Controle de volume */}
              <div className="mb-4">
                <label className="text-white text-sm mb-2 block">
                  🔊 Volume: {Math.round(volume * 100)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer
                             [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                             [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
                             [&::-webkit-slider-thumb]:bg-magic-pink [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>

              {/* Botões de ação */}
              <div className="flex gap-2">
                <motion.button
                  onClick={stopMusic}
                  className="flex-1 bg-white/20 text-white py-2 rounded-lg text-sm hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ⏹️ Parar
                </motion.button>
                
                <motion.button
                  onClick={fadeOutVolume}
                  className="flex-1 bg-white/20 text-white py-2 rounded-lg text-sm hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🔇 Fade Out
                </motion.button>
              </div>

              {/* Indicador de status */}
              <div className="mt-4 text-center">
                <div className={`inline-block w-3 h-3 rounded-full ${isPlaying ? 'bg-green-400' : 'bg-red-400'}`} />
                <span className="text-white/70 text-xs ml-2">
                  {isPlaying ? 'Reproduzindo' : 'Pausado'}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Indicador de música flutuante */}
      <motion.div
        className="fixed bottom-4 left-4 z-40 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 
                   border border-white/20 text-white text-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-magic-pink">🎵</span>
          <span className="truncate max-w-32">
            {musicTracks[currentTrack].name}
          </span>
          {isPlaying && (
            <motion.div
              className="w-2 h-2 bg-magic-pink rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </div>
      </motion.div>
    </>
  )
}

export default AudioManager 