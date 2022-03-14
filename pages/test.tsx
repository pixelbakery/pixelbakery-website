import InnerWrapper from '@parts/InnerWrapper'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import H1 from '@typography/H1'
import { BlobProvider } from '@react-pdf/renderer'
import { TestDocument } from '@lib/pdf_jobApplication'
import React from 'react'

export interface PdfDocumentProps {
  title: string
  document: JSX.Element
}

const PdfDocument: React.FC<PdfDocumentProps> = ({ title, document }) => {
  const { useState, useEffect } = React
  const [ready, setReady] = useState(false)

  // this is hacky but helps set the render to the back of event queue https://github.com/diegomura/react-pdf/issues/420
  useEffect(() => {
    setTimeout(() => {
      setReady(true)
    }, 0)
  }, [])
  // end of hacky stuff

  if (!ready) {
    return null
  } else {
    return (
      <BlobProvider document={document}>
        {({ url, loading, error }) => {
          if (loading) {
            return <span>generating document...</span>
          }
          if (!loading && url) {
            return (
              <a href={url} download>
                - Download '{title}' (PDF){' '}
              </a>
            )
          }
          if (error) {
            console.error(error)
            return <p>An error occurred</p>
          }
          return null
        }}
      </BlobProvider>
    )
  }
}

export default function Test() {
  return (
    <Main>
      <PageSection>
        <InnerWrapper>
          <H1>hello.</H1>
          <PdfDocument title='Cost Disclosure Document' document={<TestDocument data={null} />} />
        </InnerWrapper>
      </PageSection>
    </Main>
  )
}
