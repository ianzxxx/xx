'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  Sun, 
  Moon, 
  Star, 
  Heart, 
  Sparkles, 
  Gift,
  Palette,
  Music,
  Zap
} from 'lucide-react'

interface TimeEffect {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  condition: () => boolean
  effect: string
  color: string
}

const TimeBasedEffects = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isDaytime, setIsDaytime] = useState(true)
  const [currentSeason, setCurrentSeason] = useState('')
  const [specialDay, setSpecialDay] = useState('')
  const [activeEffects, setActiveEffects] = useState<string[]>([])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now)
      setIsDaytime(now.getHours() >= 6 && now.getHours() < 18)
      setCurrentSeason(getCurrentSeason(now))
      setSpecialDay(getSpecialDay(now))
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const getCurrentSeason = (date: Date): string => {
    const month = date.getMonth()
    if (month >= 2 && month <= 4) return 'spring'
    if (month >= 5 && month <= 7) return 'summer'
    if (month >= 8 && month <= 10) return 'autumn'
    return 'winter'
  }

  const getSpecialDay = (date: Date): string => {
    const month = date.getMonth() + 1
    const day = date.getDate()
    
    if (month === 12 && day === 25) return 'christmas'
    if (month === 2 && day === 14) return 'valentines'
    if (month === 3 && day === 8) return 'womens-day'
    if (month === 5 && day === 12) return 'mothers-day'
    if (month === 10 && day === 12) return 'childrens-day'
    
    return ''
  }

  const timeEffects: TimeEffect[] = [
    {
      id: 'dawn',
      name: 'Amanhecer',
      description: 'A magia do novo dia',
      icon: <Sun className="w-6 h-6" />,
      condition: () => currentTime.getHours() >= 5 && currentTime.getHours() < 7,
      effect: 'aurora-dawn',
      color: '#fbbf24'
    },
    {
      id: 'sunset',
      name: 'Pôr do Sol',
      description: 'O momento dourado',
      icon: <Sun className="w-6 h-6" />,
      condition: () => currentTime.getHours() >= 17 && currentTime.getHours() < 19,
      effect: 'aurora-sunset',
      color: '#f97316'
    },
    {
      id: 'night',
      name: 'Noite Estrelada',
      description: 'A magia da noite',
      icon: <Moon className="w-6 h-6" />,
      condition: () => currentTime.getHours() >= 22 || currentTime.getHours() < 5,
      effect: 'starry-night',
      color: '#6366f1'
    },
    {
      id: 'spring',
      name: 'Primavera',
      description: 'Flores e renascimento',
      icon: <Sparkles className="w-6 h-6" />,
      condition: () => currentSeason === 'spring',
      effect: 'spring-petals',
      color: '#10b981'
    },
    {
      id: 'summer',
      name: 'Verão',
      description: 'Energia e vitalidade',
      icon: <Sun className="w-6 h-6" />,
      condition: () => currentSeason === 'summer',
      effect: 'summer-rays',
      color: '#f59e0b'
    },
    {
      id: 'autumn',
      name: 'Outono',
      description: 'Transformação e beleza',
      icon: <Palette className="w-6 h-6" />,
      condition: () => currentSeason === 'autumn',
      effect: 'autumn-leaves',
      color: '#d97706'
    },
    {
      id: 'winter',
      name: 'Inverno',
      description: 'Mistério e magia',
      icon: <Star className="w-6 h-6" />,
      condition: () => currentSeason === 'winter',
      effect: 'winter-snow',
      color: '#60a5fa'
    },
    {
      id: 'christmas',
      name: 'Natal',
      description: 'A magia do Natal',
      icon: <Gift className="w-6 h-6" />,
      condition: () => specialDay === 'christmas',
      effect: 'christmas-magic',
      color: '#dc2626'
    },
    {
      id: 'valentines',
      name: 'Dia dos Namorados',
      description: 'Amor e romance',
      icon: <Heart className="w-6 h-6" />,
      condition: () => specialDay === 'valentines',
      effect: 'valentines-hearts',
      color: '#ec4899'
    },
    {
      id: 'womens-day',
      name: 'Dia da Mulher',
      description: 'Celebrando a força feminina',
      icon: <Star className="w-6 h-6" />,
      condition: () => specialDay === 'womens-day',
      effect: 'womens-day-power',
      color: '#8b5cf6'
    },
    {
      id: 'mothers-day',
      name: 'Dia das Mães',
      description: 'Amor maternal',
      icon: <Heart className="w-6 h-6" />,
      condition: () => specialDay === 'mothers-day',
      effect: 'mothers-day-love',
      color: '#f472b6'
    },
    {
      id: 'childrens-day',
      name: 'Dia das Crianças',
      description: 'Inocência e alegria',
      icon: <Sparkles className="w-6 h-6" />,
      condition: () => specialDay === 'childrens-day',
      effect: 'childrens-day-joy',
      color: '#06b6d4'
    }
  ]

  useEffect(() => {
    const active = timeEffects
      .filter(effect => effect.condition())
      .map(effect => effect.effect)
    
    setActiveEffects(active)
  }, [currentTime, currentSeason, specialDay])

  const getTimeGreeting = (): string => {
    const hour = currentTime.getHours()
    
    if (hour >= 5 && hour < 12) return 'Bom dia'
    if (hour >= 12 && hour < 18) return 'Boa tarde'
    if (hour >= 18 && hour < 22) return 'Boa noite'
    return 'Boa madrugada'
  }

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
      {/* Time-based Effects Indicator */}
      <AnimatePresence>
        {activeEffects.length > 0 && (
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white font-semibold text-sm mb-2">
              {getTimeGreeting()}, Grazi!
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-white/70" />
              <span className="text-white/70 text-xs">
                {currentTime.toLocaleTimeString('pt-BR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>
            
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-white/70" />
              <span className="text-white/70 text-xs">
                {currentTime.toLocaleDateString('pt-BR', { 
                  day: '2-digit', 
                  month: '2-digit' 
                })}
              </span>
            </div>
            
            {/* Active Effects */}
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {activeEffects.slice(0, 3).map((effect, index) => {
                const effectInfo = timeEffects.find(e => e.effect === effect)
                if (!effectInfo) return null
                
                return (
                  <motion.div
                    key={effect}
                    className="flex items-center gap-1 px-2 py-1 rounded-full text-xs"
                    style={{ 
                      backgroundColor: `${effectInfo.color}20`,
                      border: `1px solid ${effectInfo.color}40`
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span style={{ color: effectInfo.color }}>
                      {effectInfo.icon}
                    </span>
                    <span className="text-white/80 text-xs">
                      {effectInfo.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
            
            {/* Special Day Indicator */}
            {specialDay && (
              <motion.div
                className="mt-3 p-2 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center justify-center gap-2 text-pink-300">
                  <Gift className="w-4 h-4" />
                  <span className="text-xs font-medium">
                    {timeEffects.find(e => e.effect.includes(specialDay))?.name}
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TimeBasedEffects 