import { Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'

// export const SpaceGrotesk = Space_Grotesk({ subsets: ['latin', 'latin-ext', 'vietnamese'] })
export const SpaceGrotesk = localFont({
  src: './SpaceGrotesk-VariableFont_wght.ttf',
})

export const Technomite = localFont({
  src: './Technomite.ttf',
})
