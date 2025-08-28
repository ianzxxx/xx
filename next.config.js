/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações para Next.js 14
  experimental: {
    // Removendo appDir (não é mais necessário na v14)
  },
  
  // Configurações de imagem
  images: {
    domains: ['localhost'],
  },
  
  // Configuração Webpack para shaders
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    })
    return config
  },
}

module.exports = nextConfig 