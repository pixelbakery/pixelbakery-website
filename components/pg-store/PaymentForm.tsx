import { PaymentElement, useElements } from '@stripe/react-stripe-js'

export default function PaymentForm() {
  const elements = useElements()

  return <PaymentElement />
}
