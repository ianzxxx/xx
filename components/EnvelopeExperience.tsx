'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, Star, Music, X } from 'lucide-react'

const EnvelopeExperience = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [showMusic, setShowMusic] = useState(false)
  const [hearts, setHearts] = useState<Array<{id: number, type: 'forming' | 'falling' | 'bouncing', x: number, y: number, delay: number}>>([])
  const [typedText, setTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [showMessageTitle, setShowMessageTitle] = useState(false)
  const [showSignature, setShowSignature] = useState(false)
  const envelopeRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Texto da mensagem para digitação
  const messageText = `Grazi, você é a pessoa que faz o meu dia ser mais feliz.

Cada momento que falo com você eu me sinto mais especial e alegre por te fazer bem.

Seu olhar, seu cabelo, todas as suas qualidades me fazem ser louco por ti de uma forma que nunca imaginei que eu seria.

Sei que nos conhecemos há pouco tempo, mas eu quero que isso vá pra frente mais que tudo.`

  // Sequência de animações
  useEffect(() => {
    // Mostrar título principal
    const titleTimer = setTimeout(() => setShowTitle(true), 500)
    
    return () => clearTimeout(titleTimer)
  }, [])

  // Efeito de digitação
  useEffect(() => {
    if (showMessage) {
      // Reset do texto
      setTypedText('')
      setIsTyping(true)
      
      let index = 0
      const typeInterval = setInterval(() => {
        if (index < messageText.length) {
          const newText = messageText.substring(0, index + 1)
          setTypedText(newText)
          index++
        } else {
          setIsTyping(false)
          clearInterval(typeInterval)
          
          // Mostrar título da mensagem após digitação
          setTimeout(() => setShowMessageTitle(true), 200)
          
          // Mostrar assinatura após título
          setTimeout(() => setShowSignature(true), 400)
        }
      }, 40) // Velocidade mais rápida para melhor experiência
      
      return () => clearInterval(typeInterval)
    }
  }, [showMessage, messageText])

  // Reset do estado de digitação quando a mensagem é fechada
  useEffect(() => {
    if (!showMessage) {
      setIsTyping(false)
      setTypedText('')
    }
  }, [showMessage])

  // Criar corações mágicos
  useEffect(() => {
    const createHeart = () => {
      const types: Array<'forming' | 'falling' | 'bouncing'> = ['forming', 'falling', 'bouncing']
      const type = types[Math.floor(Math.random() * types.length)]
      const x = Math.random() * 100
      const y = Math.random() * 100
      const delay = Math.random() * 2
      
      const newHeart = {
        id: Date.now() + Math.random(),
        type,
        x,
        y,
        delay
      }
      
      setHearts(prev => [...prev, newHeart])
      
      // Remover coração após a animação
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id))
      }, type === 'falling' ? 5000 : 4000)
    }

    // Criar corações periodicamente - MAIS FREQUENTE!
    const interval = setInterval(createHeart, 400)
    
    return () => clearInterval(interval)
  }, [])

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true)
      
      // Pequeno delay para mostrar a mensagem
      setTimeout(() => {
        setShowMessage(true)
      }, 600) // Reduzido de 800ms para 600ms
      
      // Criar explosão de corações ao clicar - MAIS CORAÇÕES!
      for (let i = 0; i < 25; i++) {
        setTimeout(() => {
          const x = 50 + (Math.random() - 0.5) * 80
          const y = 50 + (Math.random() - 0.5) * 80
          const type: 'forming' | 'bouncing' = Math.random() > 0.5 ? 'forming' : 'bouncing'
          
          const newHeart = {
            id: Date.now() + Math.random(),
            type,
            x,
            y,
            delay: 0
          }
          
          setHearts(prev => [...prev, newHeart])
          
          setTimeout(() => {
            setHearts(prev => prev.filter(h => h.id !== newHeart.id))
          }, 4000)
        }, i * 60) // Reduzido de 80ms para 60ms
      }
    }
  }

  const handleReset = () => {
    setIsOpen(false)
    setShowMessage(false)
    setHearts([])
    setTypedText('')
    setIsTyping(false)
    setShowMessageTitle(false)
    setShowSignature(false)
  }

  const handleMusicClick = () => {
    setShowMusic(true)
    // Tocar música automaticamente
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  const handleCloseMusic = () => {
    setShowMusic(false)
    // Parar música
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden cosmic-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Hearts */}
        <div className="floating-hearts">
          <Heart className="floating-heart w-5 h-5" />
          <Heart className="floating-heart w-4 h-4" />
          <Heart className="floating-heart w-6 h-6" />
          <Heart className="floating-heart w-3 h-3" />
          <Heart className="floating-heart w-5 h-5" />
          <Heart className="floating-heart w-4 h-4" />
          <Heart className="floating-heart w-6 h-6" />
          <Heart className="floating-heart w-3 h-3" />
          <Heart className="floating-heart w-5 h-5" />
        </div>
        
        {/* Sparkles */}
        <div className="sparkles">
          <Sparkles className="sparkle w-3 h-3" />
          <Sparkles className="sparkle w-4 h-4" />
          <Sparkles className="sparkle w-2 h-2" />
          <Sparkles className="sparkle w-3 h-3" />
          <Sparkles className="sparkle w-4 h-4" />
          <Sparkles className="sparkle w-2 h-2" />
          <Sparkles className="sparkle w-3 h-3" />
          <Sparkles className="sparkle w-4 h-4" />
        </div>
        
        {/* Floating Stars */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Star className="w-3 h-3" />
          </motion.div>
        ))}
      </div>

      {/* Magic Hearts Effects */}
      <div className="heart-formation">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className={`${heart.type === 'forming' ? 'forming-heart' : heart.type === 'falling' ? 'falling-heart' : 'bouncing-heart'}`}
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: heart.delay }}
          >
            <Heart className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 relative max-w-xl mx-auto">
        {/* ======================================== */}
        {/* 🎯 TÍTULO PRINCIPAL - PERSONALIZE AQUI! */}
        {/* ======================================== */}
        <AnimatePresence>
          {showTitle && (
            <motion.h1
              className="text-2xl md:text-3xl font-elegant text-white mb-6 text-shadow-glow"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.8 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* 
                🌟 ALTERE ESTE TÍTULO PARA O QUE QUISER! 🌟
                
                Exemplos de títulos românticos:
                - "Grazi, meu amor"
                - "Minha querida Grazi"
                - "Grazi, você é especial"
                - "Para a mulher da minha vida"
                - "Grazi, minha princesa"
                
                Ou algo mais simples:
                - "Grazi"
                - "Querida Grazi"
                - "Minha Grazi"
              */}
              Grazi, minha princesa, você tem uma surpresa especial
            </motion.h1>
          )}
        </AnimatePresence>

        {/* ======================================== */}
        {/* 💌 ENVELOPE 3D - CLIQUE PARA ABRIR */}
        {/* ======================================== */}
        <motion.div
          ref={envelopeRef}
          className="envelope-container mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {/* Envelope */}
          <motion.div
            className={`envelope ${isOpen ? 'opened' : ''} cursor-pointer`}
            onClick={handleEnvelopeClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Envelope Body */}
            <div className="envelope-body" />
            
            {/* Envelope Flaps */}
            <motion.div
              className="envelope-flap envelope-flap-top"
              animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
              className="envelope-flap envelope-flap-left"
              animate={isOpen ? { rotateY: -180 } : { rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
              className="envelope-flap envelope-flap-right"
              animate={isOpen ? { rotateY: 180 } : { rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
              className="envelope-flap envelope-flap-bottom"
              animate={isOpen ? { rotateY: -180 } : { rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            {/* Envelope Seal */}
            <motion.div
              className="envelope-seal"
              animate={isOpen ? { scale: 0.7, opacity: 0.6 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="seal-glow" />
              <Heart className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ======================================== */}
        {/* 💝 MENSAGEM PERSONALIZADA - SUAS PALAVRAS! */}
        {/* ======================================== */}
        {showMessage && (
          <motion.div
            className="message-container"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <div className="message-content">
              {/* ======================================== */}
              {/* 🎯 TÍTULO DA MENSAGEM - PERSONALIZE! */}
              {/* ======================================== */}
              <motion.div
                className="message-header"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              >
                <Sparkles className="w-5 h-5 text-pink-400 mb-2" />
                <h2 className="message-title">
                  {/* 
                    🌟 ALTERE ESTE TÍTULO DA MENSAGEM! 🌟
                    
                    Exemplos românticos:
                    - "Mensagem do Coração"
                    - "Palavras de Amor"
                    - "Meu Sentimento por Você"
                    - "Uma Declaração Especial"
                    - "O Que Sinto por Ti"
                    
                    Ou algo mais simples:
                    - "Mensagem Especial"
                    - "Para Você"
                    - "Meu Amor"
                  */}
                  Enquanto eu existir não existirá alguém que seja mais apaixonado ou obcecado por você
                </h2>
              </motion.div>
              
              {/* ======================================== */}
              {/* 💖 MENSAGEM PRINCIPAL - SUAS PALAVRAS! */}
              {/* ======================================== */}
              <div className="message-body">
                <div className="message-text">
                  {/* 
                    🌟 AQUI VOCÊ COLOCA SUA MENSAGEM PERSONALIZADA! 🌟
                    
                    Escreva aqui o que você quer dizer para a Grazi.
                    Pode ser uma declaração de amor, uma mensagem romântica,
                    ou qualquer coisa que venha do seu coração.
                    
                    Exemplos de mensagens românticas:
                    
                    "Grazi, desde o primeiro momento que te vi, meu coração 
                    soube que você era especial. Cada dia ao seu lado é um 
                    presente que agradeço ao universo. Você é a luz que 
                    ilumina meus dias e o amor que preenche minha vida."
                    
                    "Querida Grazi, você é mais que uma pessoa para mim. 
                    Você é meu sonho realizado, minha felicidade diária, 
                    meu presente e meu futuro. Te amo mais que as palavras 
                    podem expressar."
                    
                    "Grazi, minha vida mudou completamente desde que você 
                    entrou nela. Você trouxe cores, alegria e um amor que 
                    eu nem sabia que existia. Você é minha inspiração e 
                    minha força para ser melhor a cada dia."
                    
                    Ou escreva sua própria mensagem do coração! 💕
                  */}
                  
                  {/* ======================================== */}
                  {/* 🎯 SUA MENSAGEM PERSONALIZADA COMEÇA AQUI */}
                  {/* ======================================== */}
                  
                  <div className="typing-text">
                    {typedText || 'Carregando mensagem...'}
                    {isTyping && <span className="typing-cursor">|</span>}
                  </div>
                  
                  {/* ======================================== */}
                  {/* 🎯 SUA MENSAGEM PERSONALIZADA TERMINA AQUI */}
                  {/* ======================================== */}
                </div>
              </div>
              
              {/* ======================================== */}
              {/* ✍️ ASSINATURA - PERSONALIZE! */}
              {/* ======================================== */}
              <motion.div
                className="message-footer"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              >
                <div className="signature-line" />
                <p className="signature">
                  {/* 
                    🌟 ALTERE A ASSINATURA PARA O QUE QUISER! 🌟
                    
                    Exemplos românticos:
                    - "Com todo meu amor"
                    - "Para sempre seu"
                    - "Com carinho infinito"
                    - "Seu amor eterno"
                    - "Com todo meu coração"
                    
                    Ou algo mais simples:
                    - "Com carinho especial"
                    - "Com amor"
                    - "Para sempre"
                    - "Seu amor"
                  */}
                  Com todo o amor do seu nerd programador
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ======================================== */}
        {/* 🔄 BOTÕES - PERSONALIZE O TEXTO! */}
        {/* ======================================== */}
        {isOpen && (
          <motion.div
            className="flex gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <motion.button
              onClick={handleReset}
              className="reset-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {/* 
                🌟 ALTERE O TEXTO DO BOTÃO SE QUISER! 🌟
                
                Exemplos:
                - "Viver Novamente"
                - "Abrir Novamente"
                - "Recomeçar"
                - "Ver Novamente"
                - "Fechar e Abrir"
              */}
              Ler Novamente
            </motion.button>

            <motion.button
              onClick={handleMusicClick}
              className="music-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Music className="w-4 h-4 mr-2" />
              Extra
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Music Modal */}
      <AnimatePresence>
        {showMusic && (
          <motion.div
            className="music-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseMusic}
          >
            <motion.div
              className="music-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.5, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Audio Element */}
              <audio ref={audioRef} src="/music.mp3" preload="auto" />
              
              {/* Modal Header */}
              <div className="music-modal-header">
                <h3 className="music-title">
                  <Music className="w-5 h-5 mr-2" />
                  Nossa musica
                </h3>
                <button onClick={handleCloseMusic} className="close-button">
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Music Controls */}
              <div className="music-controls">
                <div className="control-group">
                  <button 
                    onClick={() => audioRef.current?.play()} 
                    className="control-button primary"
                  >
                    <span className="control-icon">▶️</span>
                    <span className="control-text">Tocar</span>
                  </button>
                  <div className="volume-control">
                    <span className="volume-icon">🔊</span>
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.1" 
                      defaultValue="0.7"
                      className="volume-slider"
                      onChange={(e) => {
                        if (audioRef.current) {
                          audioRef.current.volume = parseFloat(e.target.value)
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Lyrics */}
              <div className="lyrics-container">
                <div className="lyrics-header">
                  <h4 className="lyrics-title">
                    <Music className="w-5 h-5 mr-2" />
                    A Gente Nem Ficou - Jorge & Mateus
                  </h4>
                  <div className="song-info">
                    <span className="artist">Jorge & Mateus</span>
                    <span className="genre">Sertanejo</span>
                  </div>
                </div>
                
                <div className="lyrics-intro">
                  <p className="intro-text">
                    💕 <strong>Esta música me faz pensar em você, Grazi...</strong> 💕
                  </p>
                  <p className="intro-text">
                    Cada verso me faz pensar em você
                  </p>
                </div>
                
                <div className="lyrics-text">
                  {/* 
                    🌟 LETRA COMPLETA "A GENTE NEM FICOU" 🌟
                    
                    Esta é a letra real da música que combina perfeitamente
                    com o que sinto pela Grazi. Cada palavra tem significado especial.
                  */}
                  
                  {/* ======================================== */}
                  {/* 🎵 LETRA DA MÚSICA COMEÇA AQUI */}
                  {/* ======================================== */}
                  
                  <div className="verse">
                    <p className="verse-text">
                      A gente nem ficou
                    </p>
                    <p className="verse-text">
                      Mesmo assim eu não tiro você da cabeça
                    </p>
                  </div>
                  
                  <div className="verse">
                    <p className="verse-text">
                      O pouco que durou
                    </p>
                    <p className="verse-text">
                      Nosso encontro me faz duvidar
                    </p>
                    <p className="verse-text">
                      Que um dia eu te esqueça
                    </p>
                  </div>
                  
                  <div className="verse highlight">
                    <p className="verse-text">
                      Sei que pra nós dois um romance é
                    </p>
                    <p className="verse-text">
                      Coisa delicada demais
                    </p>
                    <p className="verse-text">
                      Não dá pra esquecer o que vivemos
                    </p>
                    <p className="verse-text">
                      Antes um do outro
                    </p>
                  </div>
                  
                  <div className="verse">
                    <p className="verse-text">
                      Bem melhor a gente deixar rolar
                    </p>
                    <p className="verse-text">
                      Se entregar
                    </p>
                    <p className="verse-text">
                      Ver o fogo que apagou
                    </p>
                    <p className="verse-text">
                      Queimar de novo
                    </p>
                  </div>
                  
                  <div className="verse special">
                    <p className="verse-text">
                      E aí? Quando vem me ver?
                    </p>
                    <p className="verse-text">
                      Tô aqui esperando você
                    </p>
                    <p className="verse-text">
                      E nem dormi, a noite já passou
                    </p>
                    <p className="verse-text">
                      Não consigo mais me dominar
                    </p>
                    <p className="verse-text">
                      Você me enfeitiçou
                    </p>
                  </div>
                  
                  <div className="verse chorus">
                    <p className="verse-text">
                      E a gente nem ficou
                    </p>
                    <p className="verse-text">
                      Uô, uô, uô, uô
                    </p>
                    <p className="verse-text">
                      E olha o que me causou
                    </p>
                    <p className="verse-text">
                      Uô, uô, uô, uô
                    </p>
                    <p className="verse-text">
                      E a gente nem ficou
                    </p>
                  </div>
                  
                  <div className="verse">
                    <p className="verse-text">
                      E a gente nem ficou
                    </p>
                    <p className="verse-text">
                      Mesmo assim eu não tiro você da cabeça
                    </p>
                    <p className="verse-text">
                      E o pouco que durou
                    </p>
                    <p className="verse-text">
                      Nosso encontro me faz duvidar
                    </p>
                    <p className="verse-text">
                      Que um dia eu te esqueça
                    </p>
                  </div>
                  
                  <div className="verse highlight">
                    <p className="verse-text">
                      Sei que pra nós dois um romance é
                    </p>
                    <p className="verse-text">
                      Coisa delicada demais
                    </p>
                    <p className="verse-text">
                      Não dá pra esquecer o que vivemos
                    </p>
                    <p className="verse-text">
                      Antes um do outro
                    </p>
                  </div>
                  
                  <div className="verse">
                    <p className="verse-text">
                      Bem melhor a gente deixar rolar
                    </p>
                    <p className="verse-text">
                      Se entregar
                    </p>
                    <p className="verse-text">
                      Ver o fogo que apagou
                    </p>
                    <p className="verse-text">
                      Queimar de novo
                    </p>
                  </div>
                  
                  <div className="verse special">
                    <p className="verse-text">
                      E aí, quando vem me ver?
                    </p>
                    <p className="verse-text">
                      Tô aqui esperando você
                    </p>
                    <p className="verse-text">
                      E nem dormi, a noite já passou
                    </p>
                    <p className="verse-text">
                      Não consigo mais me dominar
                    </p>
                    <p className="verse-text">
                      Você me enfeitiçou
                    </p>
                  </div>
                  
                  <div className="verse special">
                    <p className="verse-text">
                      E aí? Quando vem me ver?
                    </p>
                    <p className="verse-text">
                      Tô aqui esperando você
                    </p>
                    <p className="verse-text">
                      E nem dormi, a noite já passou
                    </p>
                    <p className="verse-text">
                      Não consigo mais me dominar
                    </p>
                    <p className="verse-text">
                      Você me enfeitiçou
                    </p>
                  </div>
                  
                  <div className="verse special">
                    <p className="verse-text">
                      E aí? Quando vem me ver?
                    </p>
                    <p className="verse-text">
                      Tô aqui esperando você
                    </p>
                    <p className="verse-text">
                      E nem dormi, a noite já passou
                    </p>
                    <p className="verse-text">
                      Não consigo mais me dominar
                    </p>
                    <p className="verse-text">
                      Você me enfeitiçou
                    </p>
                  </div>
                  
                  <div className="verse special">
                    <p className="verse-text">
                      E aí? Quando vem me ver?
                    </p>
                    <p className="verse-text">
                      Tô aqui esperando você
                    </p>
                    <p className="verse-text">
                      E nem dormi, a noite já passou
                    </p>
                    <p className="verse-text">
                      Não consigo mais me dominar
                    </p>
                    <p className="verse-text">
                      Você me enfeitiçou
                    </p>
                  </div>
                  
                  <div className="verse final-chorus">
                    <p className="verse-text">
                      E a gente nem ficou
                    </p>
                    <p className="verse-text">
                      Uô, uô, uô, uô
                    </p>
                    <p className="verse-text">
                      E olha o que me causou
                    </p>
                    <p className="verse-text">
                      Uô, uô, uô, uô
                    </p>
                    <p className="verse-text">
                      E a gente nem ficou
                    </p>
                    <p className="verse-text">
                      Uô, uô, uô, uô
                    </p>
                    <p className="verse-text">
                      E a gente nem ficou
                    </p>
                    <p className="verse-text">
                      Uô, uô, uô, uô
                    </p>
                    <p className="verse-text">
                      E a gente nem ficou
                    </p>
                  </div>
                  
                  {/* ======================================== */}
                  {/* 🎵 LETRA DA MÚSICA TERMINA AQUI */}
                  {/* ======================================== */}
                </div>
                
                <div className="lyrics-footer">
                  <p className="dedication">
                    💕 Esta música me faz pensar em nós
                  </p>
                  <p className="message">
                    Cada verso me motiva a te querer mais 
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EnvelopeExperience 