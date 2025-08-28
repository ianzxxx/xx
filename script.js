class EnvelopeApp {
    constructor() {
        this.envelope = document.getElementById('envelope');
        this.messageContainer = document.getElementById('messageContainer');
        this.messageText = document.getElementById('messageText');
        this.confettiContainer = document.getElementById('confettiContainer');
        this.soundToggle = document.getElementById('soundToggle');
        this.resetBtn = document.getElementById('resetBtn');
        this.specialBtn = document.getElementById('specialBtn');
        this.welcomeMessage = document.getElementById('welcomeMessage');
        this.starsContainer = document.getElementById('starsContainer');
        this.floatingHearts = document.getElementById('floatingHearts');
        this.magicParticles = document.getElementById('magicParticles');
        this.emotionalOverlay = document.getElementById('emotionalOverlay');
        this.specialMoment = document.getElementById('specialMoment');
        
        this.isOpened = false;
        this.soundEnabled = true;
        this.audioContext = null;
        this.specialMode = false;
        this.storyStep = 0;
        
        // Mensagem emocionante e personalizada
        this.message = "Querida Grazi, você é uma pessoa extraordinária! 🌟 Cada vez que você interage com a tecnologia, você está criando algo único e especial. Sua curiosidade e criatividade inspiram não apenas a mim, mas a todos que têm a sorte de conhecer você. ✨";
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.createAudioContext();
        this.createStars();
        this.createFloatingHearts();
        this.addLoadingAnimation();
        this.startWelcomeSequence();
    }
    
    bindEvents() {
        this.envelope.addEventListener('click', () => this.openEnvelope());
        this.soundToggle.addEventListener('click', () => this.toggleSound());
        this.resetBtn.addEventListener('click', () => this.resetEnvelope());
        this.specialBtn.addEventListener('click', () => this.activateSpecialMode());
        
        // Efeitos especiais de hover
        this.envelope.addEventListener('mouseenter', () => {
            this.playHoverSound();
            this.addSparkles();
        });
        
        this.envelope.addEventListener('mouseleave', () => this.removeSparkles());
    }
    
    createAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Audio não suportado neste navegador');
            this.soundEnabled = false;
            this.updateSoundButton();
        }
    }
    
    createStars() {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            this.starsContainer.appendChild(star);
        }
    }
    
    createFloatingHearts() {
        setInterval(() => {
            if (this.isOpened) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.textContent = '💖';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
                this.floatingHearts.appendChild(heart);
                
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 7000);
            }
        }, 2000);
    }
    
    startWelcomeSequence() {
        setTimeout(() => {
            this.welcomeMessage.style.animation = 'fadeInUp 2s ease-out';
        }, 500);
        
        // Sequência de mensagens de boas-vindas
        setTimeout(() => {
            this.showWelcomeHint("💫 O envelope está esperando por você...");
        }, 3000);
        
        setTimeout(() => {
            this.showWelcomeHint("🌟 Clique para descobrir a surpresa!");
        }, 6000);
    }
    
    showWelcomeHint(text) {
        const hint = document.createElement('div');
        hint.className = 'welcome-hint';
        hint.textContent = text;
        hint.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 1.2rem;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
            animation: hint-fade 3s ease-in-out;
            pointer-events: none;
            z-index: 100;
        `;
        
        document.body.appendChild(hint);
        
        setTimeout(() => {
            if (hint.parentNode) {
                hint.parentNode.removeChild(hint);
            }
        }, 3000);
    }
    
    addLoadingAnimation() {
        this.envelope.classList.add('loading');
        setTimeout(() => {
            this.envelope.classList.remove('loading');
        }, 3000);
    }
    
    openEnvelope() {
        if (this.isOpened) return;
        
        this.isOpened = true;
        this.envelope.classList.add('opened');
        
        // Sequência emocionante de abertura
        this.playOpeningSequence();
        
        // Tocar som de abertura
        this.playOpenSound();
        
        // Criar confetes especiais
        this.createSpecialConfetti();
        
        // Mostrar mensagem com delay dramático
        setTimeout(() => {
            this.showMessage();
        }, 1200);
        
        // Efeitos especiais
        this.addShakeEffect();
        this.createMagicParticles();
        
        // Ocultar mensagem de boas-vindas
        this.welcomeMessage.style.opacity = '0';
        this.welcomeMessage.style.transform = 'translateY(-20px)';
    }
    
    playOpeningSequence() {
        // Sequência de animações especiais
        setTimeout(() => {
            this.envelope.style.filter = 'drop-shadow(0 0 80px rgba(255, 107, 157, 1))';
        }, 400);
        
        setTimeout(() => {
            this.envelope.style.filter = 'drop-shadow(0 0 60px rgba(255, 107, 157, 0.8))';
        }, 800);
    }
    
    playOpenSound() {
        if (!this.soundEnabled || !this.audioContext) return;
        
        try {
            // Som mais dramático e emocionante
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Melodia especial
            oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.2);
            oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.4);
            oscillator.frequency.exponentialRampToValueAtTime(1000, this.audioContext.currentTime + 0.6);
            
            gainNode.gain.setValueAtTime(0.4, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.8);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.8);
        } catch (e) {
            console.log('Erro ao tocar som:', e);
        }
    }
    
    playHoverSound() {
        if (!this.soundEnabled || !this.audioContext) return;
        
        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1000, this.audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.15, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.1);
        } catch (e) {
            console.log('Erro ao tocar som de hover:', e);
        }
    }
    
    createSpecialConfetti() {
        const colors = ['#ff6b9d', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#ff6b6b'];
        const shapes = ['💖', '✨', '🌟', '💫', '🎉', '🎊', '💕', '💝'];
        
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                
                // Alternar entre formas e cores
                if (i % 3 === 0) {
                    confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
                    confetti.style.fontSize = '20px';
                    confetti.style.background = 'transparent';
                } else {
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                }
                
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
                
                this.confettiContainer.appendChild(confetti);
                
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 6000);
            }, i * 15);
        }
    }
    
    createMagicParticles() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'magic-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 2 + 's';
                this.magicParticles.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 8000);
            }, i * 100);
        }
    }
    
    showMessage() {
        this.messageContainer.classList.add('show');
        this.typewriterEffect();
        
        // Mostrar momento especial após a mensagem
        setTimeout(() => {
            this.showSpecialMoment();
        }, 4000);
    }
    
    typewriterEffect() {
        let i = 0;
        const speed = 40; // Velocidade mais lenta para maior impacto
        
        const typeWriter = () => {
            if (i < this.message.length) {
                this.messageText.textContent += this.message.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                // Efeito especial após completar
                this.addTypewriterFinale();
            }
        };
        
        typeWriter();
    }
    
    addTypewriterFinale() {
        this.messageText.style.animation = 'text-glow 2s ease-in-out infinite';
        this.messageText.style.textShadow = '0 0 20px rgba(255, 107, 157, 0.5)';
    }
    
    showSpecialMoment() {
        this.specialMoment.classList.add('show');
        
        // Efeito especial no momento especial
        setTimeout(() => {
            this.specialMoment.style.animation = 'special-pulse 2s ease-in-out infinite';
        }, 1000);
    }
    
    addShakeEffect() {
        this.envelope.style.animation = 'shake 0.8s ease-in-out';
        setTimeout(() => {
            this.envelope.style.animation = '';
        }, 800);
    }
    
    addSparkles() {
        const sparklesContainer = this.envelope.querySelector('.envelope-sparkles');
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparklesContainer.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                }, 1500);
            }, i * 100);
        }
    }
    
    removeSparkles() {
        const sparkles = this.envelope.querySelectorAll('.sparkle');
        sparkles.forEach(sparkle => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        });
    }
    
    activateSpecialMode() {
        this.specialMode = !this.specialMode;
        
        if (this.specialMode) {
            this.specialBtn.textContent = '✨ Modo Especial Ativo';
            this.specialBtn.style.background = 'linear-gradient(135deg, #4ecdc4, #45b7d1)';
            this.showEmotionalOverlay();
            this.createExtraSpecialEffects();
        } else {
            this.specialBtn.textContent = '✨ Modo Especial';
            this.specialBtn.style.background = 'linear-gradient(135deg, #ff6b9d, #c44569)';
            this.hideEmotionalOverlay();
        }
    }
    
    showEmotionalOverlay() {
        this.emotionalOverlay.classList.add('show');
        
        // Mensagem especial no modo especial
        setTimeout(() => {
            this.showSpecialMessage();
        }, 2000);
    }
    
    hideEmotionalOverlay() {
        this.emotionalOverlay.classList.remove('show');
    }
    
    showSpecialMessage() {
        const specialContent = this.emotionalOverlay.querySelector('.emotional-content');
        specialContent.innerHTML = `
            <h2>💖 Grazi, Você é Única! 💖</h2>
            <p>Esta experiência foi criada especialmente para você, com cada detalhe pensado para trazer alegria ao seu coração.</p>
            <p>Você merece toda a magia e beleza que o universo pode oferecer.</p>
            <div class="emotional-hearts">💕💖💕💖💕</div>
            <p style="margin-top: 2rem; font-size: 1.2rem; color: #ff6b9d;">Você é especial demais! ✨</p>
        `;
    }
    
    createExtraSpecialEffects() {
        // Efeitos extras no modo especial
        setInterval(() => {
            if (this.specialMode) {
                this.createRainbowTrail();
            }
        }, 1000);
    }
    
    createRainbowTrail() {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #ff6b9d, #4ecdc4, #45b7d1, #feca57);
            border-radius: 50%;
            pointer-events: none;
            z-index: 999;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: rainbow-trail 3s linear forwards;
        `;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 3000);
    }
    
    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        this.updateSoundButton();
        
        if (this.soundEnabled && this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }
    
    updateSoundButton() {
        if (this.soundEnabled) {
            this.soundToggle.classList.remove('sound-off');
            this.soundToggle.querySelector('.sound-text').textContent = 'Som: Ligado';
        } else {
            this.soundToggle.classList.add('sound-off');
            this.soundToggle.querySelector('.sound-text').textContent = 'Som: Desligado';
        }
    }
    
    resetEnvelope() {
        this.isOpened = false;
        this.specialMode = false;
        this.envelope.classList.remove('opened');
        this.messageContainer.classList.remove('show');
        this.messageText.textContent = '';
        this.messageText.style.animation = '';
        this.messageText.style.textShadow = '';
        this.specialMoment.classList.remove('show');
        this.specialMoment.style.animation = '';
        this.specialBtn.textContent = '✨ Modo Especial';
        this.specialBtn.style.background = 'linear-gradient(135deg, #ff6b9d, #c44569)';
        
        // Limpar efeitos
        this.confettiContainer.innerHTML = '';
        this.magicParticles.innerHTML = '';
        this.hideEmotionalOverlay();
        
        // Restaurar mensagem de boas-vindas
        this.welcomeMessage.style.opacity = '1';
        this.welcomeMessage.style.transform = 'translateY(0)';
        
        // Adicionar animação de loading
        this.addLoadingAnimation();
        
        // Tocar som de reset
        if (this.soundEnabled && this.audioContext) {
            this.playResetSound();
        }
        
        // Reiniciar sequência de boas-vindas
        setTimeout(() => {
            this.startWelcomeSequence();
        }, 2000);
    }
    
    playResetSound() {
        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.3);
            
            gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.3);
        } catch (e) {
            console.log('Erro ao tocar som de reset:', e);
        }
    }
}

// Adicionar CSS para animações especiais
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-8px); }
        75% { transform: translateX(8px); }
    }
    
    @keyframes hint-fade {
        0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
    
    @keyframes text-glow {
        0%, 100% { text-shadow: 0 0 20px rgba(255, 107, 157, 0.5); }
        50% { text-shadow: 0 0 30px rgba(255, 107, 157, 0.8); }
    }
    
    @keyframes special-pulse {
        0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(255, 107, 157, 0.3); }
        50% { transform: scale(1.05); box-shadow: 0 0 40px rgba(255, 107, 157, 0.6); }
    }
    
    @keyframes rainbow-trail {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Inicializar aplicação quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new EnvelopeApp();
});

// Adicionar suporte para dispositivos móveis
document.addEventListener('touchstart', () => {
    if (window.audioContext && window.audioContext.state === 'suspended') {
        window.audioContext.resume();
    }
});

// Efeito de parallax sutil para as estrelas
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        const speed = 0.5 + (index % 3) * 0.2;
        star.style.transform = `translateY(${scrolled * speed}px)`;
    });
}); 