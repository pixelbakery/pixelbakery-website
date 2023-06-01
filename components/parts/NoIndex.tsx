import { NextSeo } from 'next-seo'

function NoIndex() {
  return <NextSeo noindex={true} />
}

export default NoIndex
