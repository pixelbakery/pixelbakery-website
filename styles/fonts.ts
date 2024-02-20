import localFont from 'next/font/local'

/*****************************************/
/*               DEMPSEY                  */
/*****************************************/
const dempsey = localFont({
  display: 'swap',
  variable: '--font-dempsey',
  src: '../public/fonts/dempsey/dempsey-regular.woff2',
  weight: '400', // font-semibold
  style: 'normal',
})

/*****************************************/
/*               POPPINS                 */
/*****************************************/
const poppins = localFont({
  src: [
    // 400, font-normal
    {
      path: '../public/fonts/poppins/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/poppins/Poppins-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    // // 500, font-medium
    {
      path: '../public/fonts/poppins/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/poppins/Poppins-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    // //  600, font-semibold
    {
      path: '../public/fonts/poppins/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/poppins/Poppins-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    // // 700, font-bold
    {
      path: '../public/fonts/poppins/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/poppins/Poppins-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    // // 800, font-extrabold
    {
      path: '../public/fonts/poppins/Poppins-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/poppins/Poppins-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    // // 900, font-black
    {
      path: '../public/fonts/poppins/Poppins-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/poppins/Poppins-BlackItalic.woff2',
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
  src: [
    // SemiBold (600)
    {
      path: '../public/fonts/gilroy/gilroy-bold.woff2',
      weight: '600', // font-semibold
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy/gilroy-bolditalic.woff2',
      weight: '600', // font-semibold
      style: 'italic',
    },
    // // Bold (700)
    {
      path: '../public/fonts/gilroy/gilroy-extrabold.woff2',
      weight: '700', // font-bold
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy/gilroy-extrabolditalic.woff2',
      weight: '700', // font-bold
      style: 'italic',
    },
    // // ExtraBold (800)
    {
      path: '../public/fonts/gilroy/gilroy-black.woff2',
      weight: '800', // font-extrabold
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy/gilroy-blackitalic.woff2',
      weight: '800', // font-extrabold
      style: 'italic',
    },
  ],
  variable: '--font-gilroy',
})

export { poppins, dempsey, gilroy }
