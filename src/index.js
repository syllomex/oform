/* eslint-disable prettier/prettier */
/* eslint-disable import/no-named-default */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react'
import { FormProvider } from './FormProvider'

import { default as Input } from './Input'
import { default as Address } from './Address'
import { default as Image } from './Image'
import { default as Label } from './Label'
import { default as Select } from './Select'
import { default as Option } from './Option'
import { default as Submit } from './Submit'

export { default as Input } from './Input'
export { default as Address } from './Address'
export { default as Image } from './Image'
export { default as Label } from './Label'
export { default as Select } from './Select'
export { default as Option } from './Option'
export { default as Toggle } from './Toggle'
export { default as Submit } from './Submit'

function preventDefault(event) {
  event.preventDefault()
}

export function Form({ children }) {
  return (
    <form onSubmit={preventDefault}>
      <FormProvider>{children}</FormProvider>
    </form>
  )
}

export function ExampleComponent() {
  const [data, setData] = useState(null)

  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div>
      <Form>
        <Label text='Email: '>
          <Input name='email' type='email' required />
        </Label>
        <Submit data={{ data, setData }}>Enviar</Submit>
      </Form>
    </div>
  )
}
