import { NextSeo } from 'next-seo'

function NoIndex() {
  return <NextSeo noindex={true} nofollow={true} />
}

export default NoIndex
