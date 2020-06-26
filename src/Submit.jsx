import React from 'react';
import { useForm } from './FormProvider';

function handleSubmit({ fields, setData, files }) {
    let formObject = {}
    let isRequiredEmpty = false
    let images = []
    fields.map(field => {
        if (field.files && field.files[0]) {
            formObject = {
                ...formObject,
                [field.name]: field.files[0].name
            }
            images.push(field.files[0])
            return null
        }
        if (field.required && !field.value) isRequiredEmpty = true
        formObject = {
            ...formObject,
            [field.name]: field.value
        }
        return null
    })

    if (isRequiredEmpty) return

    setData(formObject)
    if (images.length > 0) {
        if (files.length < images.length) {
            console.error("É necessário um setState para cada imagem. Utilize 'file: [setImagem1, setImagem2, ...]' no <Submit>.")
            return
        }
        files.forEach((file, index) => {
            if (images[index] !== undefined)
                file({ file: images[index] })
        });
    }
}

function Submit({ children, ...props }) {
    const { fields } = useForm()

    if (!props.data) {
        console.error("O elemento Submit precisa de um setState para retornar os dados.")
        return null
    }
    const { setData } = props.data
    const { ...files } = props.data

    return (
        <button type="submit" {...props}
            onClick={() => handleSubmit({ fields, setData, ...files })}>
            {children}
        </button>
    );
}

export default Submit;