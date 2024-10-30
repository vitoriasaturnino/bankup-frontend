// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: false, // Desativa dark mode para que o light mode seja padrão
  theme: {
    extend: {
      colors: {
        background: '#F1F5F9',   // Fundo claro
        surface: '#FFFFFF',      // Superfícies como cartões e tabelas
        primary: '#34D399',      // Verde principal (inspirado no iOS)
        accent: '#10B981',       // Acento verde mais intenso
        textPrimary: '#1F2937',  // Texto primário em cinza-escuro
        textSecondary: '#4B5563',// Texto secundário em cinza
        gradientFrom: '#A7F3D0', // Início do degradê verde claro
        gradientTo: '#6EE7B7',   // Final do degradê verde
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        lg: '16px', // Bordas mais suaves
      },
      boxShadow: {
        card: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Sombra suave para cartões
      },
    },
  },
  plugins: [],
}
