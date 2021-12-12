import { PaymentElement, useElements } from '@stripe/react-stripe-js'

export default function Store_PaymentForm() {
  const elements = useElements()

  return <PaymentElement />
}
