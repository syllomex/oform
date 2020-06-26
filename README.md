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
import React, { useState, useEffect } from "react";
import { Form, Input, Label, Submit } from "oform";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(data);
    handleSubmit(data)

  }, [data]);

  return (
    <Form>
      <Label text="Email">
        <Input type="email" name="email" required />
      </Label>
      <Submit data={{ setData }}>Enviar</Submit>
    </Form>
  );
}

export default App;
```

## License

MIT © [syllomex](https://github.com/syllomex)
