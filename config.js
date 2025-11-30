// config.js

window.PORTFOLIO_CONFIG = {
  // Hero Section
  NAME_HERO: "PixelCraft Studio",
  SUB_HEADLINE: "Membantu UMKM dan teman-teman sekolah dengan solusi desain grafis, pengembangan web, editing video, dan bot WhatsApp yang efektif.",

  // Skills Badges
  SKILLS_BADGES: [
    "UI/UX Design",
    "Web Development", 
    "Video Editing",
    "WhatsApp Bot",
    "Figma",
    "React",
    "Adobe Premiere",
    "Node.js"
  ],

  // Portfolio Cards
  PORTFOLIO_CARDS: [
    {
      title: "Toko Online UMKM",
      description: "Website e-commerce untuk UMKM lokal dengan sistem pembayaran dan manajemen produk.",
      tools: ["React", "Tailwind CSS", "Firebase"],
      demoLink: "#"
    },
    {
      title: "Brand Identity Cafe", 
      description: "Desain identitas visual lengkap untuk cafe startup termasuk logo, menu, dan signage.",
      tools: ["Figma", "Adobe Illustrator", "Photoshop"],
      demoLink: "#"
    },
    {
      title: "Video Promosi Sekolah",
      description: "Video promosi tahunan untuk kegiatan sekolah dengan animasi motion graphics.",
      tools: ["Adobe Premiere", "After Effects", "Photoshop"],
      demoLink: "#"
    },
    {
      title: "Bot WhatsApp Restoran",
      description: "Sistem bot WhatsApp untuk pemesanan makanan dan informasi menu restoran.",
      tools: ["Node.js", "Twilio API", "MongoDB"],
      demoLink: "#"
    }
  ],

  // Services List
  SERVICES_LIST: [
    {
      name: "Desain Grafis (Logo & Branding)",
      price: "Rp 300.000 - 800.000"
    },
    {
      name: "Website Sederhana (1-5 halaman)", 
      price: "Rp 500.000 - 1.500.000"
    },
    {
      name: "Video Editing (1-3 menit)",
      price: "Rp 200.000 - 600.000"
    },
    {
      name: "Bot WhatsApp Dasar",
      price: "Rp 400.000 - 1.000.000"
    }
  ],

  // Authentication Configuration
  AUTH: {
    // Google OAuth configuration
    GOOGLE_CLIENT_ID: "978603752308-uphj41i4ci8lle4aplf4lrt0q3s8k0cs.apps.googleusercontent.com", // Replace with actual Google OAuth client ID
    
    // GitHub OAuth configuration  
    GITHUB_CLIENT_ID: "Ov23liThXZmoYI24iZ3H", // Replace with actual GitHub OAuth client ID
    
    // Phone verification configuration
    WHATSAPP_NUMBER: "+6287748800409",
    FONNTE_API_TOKEN: "kECanUakpdbYsTLaDjY5",
    FONNTE_API_URL: "https://api.fonnte.com/send"
  },

  // Footer
  GITHUB_LINK: "https://github.com/username/portfolio"
};
