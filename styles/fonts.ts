import localFont from 'next/font/local'

/*****************************************/
/*               DEMPSEY                  */
/*****************************************/
const dempsey = localFont({
  display: 'swap',
  preload: true,
  variable: '--font-dempsey',
  src: '../assets/fonts/dempsey/dempsey-regular.woff2',
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
      path: '../assets/fonts/poppins/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/poppins/Poppins-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    // 500, font-medium
    {
      path: '../assets/fonts/poppins/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/poppins/Poppins-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    //  600, font-semibold
    {
      path: '../assets/fonts/poppins/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/poppins/Poppins-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    // 700, font-bold
    {
      path: '../assets/fonts/poppins/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/poppins/Poppins-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    // 800, font-extrabold
    {
      path: '../assets/fonts/poppins/Poppins-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/poppins/Poppins-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    // 900, font-black
    {
      path: '../assets/fonts/poppins/Poppins-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/poppins/Poppins-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-poppins',
})

/******************************************/
/*              GILROY                    */
/******************************************/

const gilroy = localFont({
  preload: true,
  display: 'swap',
  src: [
    // SemiBold (600)
    {
      path: '../assets/fonts/gilroy/gilroy-bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/gilroy/gilroy-bolditalic.woff2',
      weight: '600',
      style: 'italic',
    },
    // Bold (700)
    {
      path: '../assets/fonts/gilroy/gilroy-extrabold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/gilroy/gilroy-extrabolditalic.woff2',
      weight: '700',
      style: 'italic',
    },
    // ExtraBold (800)
    {
      path: '../assets/fonts/gilroy/gilroy-black.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/gilroy/gilroy-blackitalic.woff2',
      weight: '800',
      style: 'italic',
    },
  ],

  variable: '--font-gilroy',
})

export { poppins, dempsey, gilroy }
