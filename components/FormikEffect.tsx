import { connect, useFormikContext } from 'formik'
import noop from 'lodash/noop'
import { useEffect } from 'react'
import { usePrevious } from '../hooks/usePrevious'

const FormikEffect = ({ onChange = noop }: any) => {
  const { values } = useFormikContext()
  const prevValues = usePrevious(values)

  useEffect(() => {
    // Don't run effect on form init
    if (prevValues) {
      onChange({ prevValues, nextValues: values })
    }
  }, [values])

  return null
}

export default connect(FormikEffect)
