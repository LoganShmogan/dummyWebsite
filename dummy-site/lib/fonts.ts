import { Delius_Unicase, Playpen_Sans } from 'next/font/google'

export const deliusUnicase = Delius_Unicase({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const playpenSans = Playpen_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})