import localFont from 'next/font/local'
import { Geologica } from 'next/font/google'

const geologica = Geologica({
  subsets: ['latin'],
  variable: '--font-geologica',
  display: 'swap',
})

/*****************************************/
/*               DEMPSEY                  */
/*****************************************/
const dempsey = localFont({
  display: 'swap',
  preload: true,
  variable: '--font-dempsey',
  src: './dempsey-regular.woff2',
  weight: '400', // font-semibold
  style: 'normal',
})

/*****************************************/
/*               POPPINS                 */
/*****************************************/
const poppins = localFont({
  display: 'swap',
  src: [
    // 400, font-normal
    {
      path: './Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Poppins-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    // 500, font-medium
    {
      path: './Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Poppins-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    //  600, font-semibold
    {
      path: './Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Poppins-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    // 700, font-bold
    {
      path: './Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Poppins-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    // 800, font-extrabold
    {
      path: './Poppins-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Poppins-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    // 900, font-black
    {
      path: './Poppins-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Poppins-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-poppins',
})

export { poppins, dempsey, geologica }
