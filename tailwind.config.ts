import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        'p-blue': '#172554',
        's-blue': '#3083DC',
        'p-yellow': '#EBBE46',
        'light-gray': '#D9DBF1',
      }
    }
  }
}