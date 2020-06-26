# oform

> A form package with Bootstrap

[![NPM](https://img.shields.io/npm/v/oform.svg)](https://www.npmjs.com/package/oform) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save oform
```

## Usage

Use Bootstrap for default stylizing.

```jsx
import React, { Component } from 'react'

import MyComponent from 'oform'
import 'oform/dist/index.css'

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

```

## License

MIT © [syllomex](https://github.com/syllomex)
