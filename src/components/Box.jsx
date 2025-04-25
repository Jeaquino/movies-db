import Count from './Count'
import { useState } from 'react'

function Box() {
    const [initValue, setInitValue] = useState(0)
  return (
    <div>
      <Count value={initValue} setValue={setInitValue} />
      <Count value={initValue} setValue={setInitValue}/>
    </div>
  )
}
export default Box
