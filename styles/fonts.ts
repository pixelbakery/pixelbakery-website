import localFont from 'next/font/local'
import { Geologica } from 'next/font/google'

const geologica = Geologica({
  subsets: ['latin'], // Adjust based on your language needs
  variable: '--font-geologica', // Define a CSS variable for Tailwind
  preload: true,
  display: 'swap',
})

/*****************************************/
/*               DEMPSEY                  */
/*****************************************/
const dempsey = localFont({
  display: 'swap',
  preload: true,
  variable: '--font-dempsey',
  src: './fonts/dempsey/dempsey-regular.woff2',
  weight: '400', // font-semibold
  style: 'normal',
})

/*****************************************/
/*               POPPINS                 */
/*****************************************/
const poppins = localFont({
  preload: true,
  display: 'swap',
  src: [
    // 400, font-normal
    {
      path: './fonts/poppins/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/poppins/Poppins-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    // 500, font-medium
    {
      path: './fonts/poppins/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/poppins/Poppins-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    //  600, font-semibold
    {
      path: './fonts/poppins/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/poppins/Poppins-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    // 700, font-bold
    {
      path: './fonts/poppins/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/poppins/Poppins-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    // 800, font-extrabold
    {
      path: './fonts/poppins/Poppins-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/poppins/Poppins-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    // 900, font-black
    {
      path: './fonts/poppins/Poppins-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/poppins/Poppins-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-poppins',
})

export { poppins, dempsey, geologica }
