import type { Config } from 'tailwindcss'
import defaultColors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
