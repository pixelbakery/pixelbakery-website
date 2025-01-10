import Error from 'next/error'
import { NextPageContext } from 'next'

interface CustomErrorComponentProps {
  statusCode: number
}

const CustomErrorComponent = ({ statusCode }: CustomErrorComponentProps) => {
  return <Error statusCode={statusCode} />
}

CustomErrorComponent.getInitialProps = async (contextData: NextPageContext) => {
  return Error.getInitialProps(contextData)
}

export default CustomErrorComponent
