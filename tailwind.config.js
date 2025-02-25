/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Define onde o Tailwind será aplicado
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A", // Azul escuro
          secondary: "#10B981", // Verde
          accent: "#FACC15", // Amarelo
          danger: "#EF4444", // Vermelho
        },
      },
    },
    plugins: [],
  };
  