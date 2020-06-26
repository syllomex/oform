>Fui tentar utilizar o Unform da Rocketseat e por algum motivo ele não funcionou, então criei esse treco aí.
>É inspirado na mesma ideia.
# Como Usar

##****As classes padrões dos elementos são do Bootstrap.**

**1. Utilize o componente ```<Form>```, ele é responsavel por envolver os Inputs por um Context Provider**
```jsx
<Form >
    <h6 className="text-primary mt-3">Dados da Conta</h6>
    <Label text="Email">
        <Input required
            name="email"
            id="login-email"
            type="email"
        />
    </Label>
    <Label text="Senha">
        <Input required
            name="password"
            id="login-password"
            type="password"
        />
    </Label>
</Form>
```
É possível passar propriedades nos elementos, como podemos observar acima.
Ao utilizar a propriedade ```required```, é inserido um asterisco vermelho na ```Label``` (fique à vontade para remover caso queira).
>Resultado
![Exemplo](https://imgur.com/ZbPrDwN.jpg)


**2. Utilize o hook useState para armazenar os dados do formulario**
```jsx
const [data, setData] = useState(null)

useEffect(() => {
    if (data) {
        // handleSubmit aqui
    }
}, [data])
```
```jsx
<Submit text="Cadastrar" className="btn btn-primary" data={{ setData }} />
```
O componente ```<Submit>``` também aceita propriedades:
```jsx
<Submit text="Cadastrar" className="btn btn-primary" data={{ setData }} disabled />
```

O submit utiliza o Hook ```useState``` para armazenar os dados dos inputs.
No exemplo acima foi utilizado ```[data, setData]``` para lidar com os dados. O useEffect detecta as alterações na ```data```, que são feitas ao clicar no botão ```<Submit>```
![Exemplo](https://imgur.com/AWWT4mI.jpg)


### Exemplos
* **Select**
```jsx
<Label text="Escolaridade">
    <Select name="escolaridade" required>
        <Option novalue>Selecione</Option>
        <Option>Ensino Fundamental Incompleto</Option>
        <Option>Ensino Fundamental Completo</Option>
        <Option>Ensino Médio Incompleto</Option>
        <Option>Ensino Médio Completo</Option>
        <Option>Ensino Superior Incompleto</Option>
        <Option>Ensino Superior Completo</Option>
    </Select>
</Label>
```
* **Button Toggle (Radio)**
```jsx
<Label text="Sexo">
    <Toggle required name="sexo" buttons={[
        { value: "Masculino" },
        { value: "Feminino" }
    ]}>
    </Toggle>
</Label>
```
* **Image (File)**
```jsx
<Image required
    name="imagem"
    preview="true"
    initialpreview="https://blog.emania.com.br/wp-content/uploads/2017/02/2-2.jpg"
    labelprops={{ className: "btn btn-primary" }} 
    >
    Selecionar Imagem
</Image>
```
* **Address (utiliza row e col do Bootstrap)**
```jsx
<Address
    number={{ name: "numero_casa" }}
    street={{ name: "nome_rua" }}
    district={{ name: "nome_bairro" }}
    city={{ name: "nome_cidade" }}
/>
```