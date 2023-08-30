/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '10px 10px 0px -1px rgba(0,0,0,1)',
      },
      backgroundImage: {
        'yellow-ball': "url(https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
        'sun-flower': "url(https://images.unsplash.com/photo-1442528010304-834a5d4f3925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80)",
        'sun-flower2': "url(https://images.pexels.com/photos/63641/bee-in-the-approach-bee-apis-pollen-63641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
    fontFamily: {
      robot: ['Roboto Mono', 'monospace'],
    },
  },
  plugins: [],
}