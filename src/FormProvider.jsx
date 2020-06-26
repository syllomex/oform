import React, { createContext, useState, useContext } from "react"

const FormContext = createContext()

export function FormProvider({ children }) {
    const [fields, setFields] = useState([])

    return <FormContext.Provider value={{ fields, setFields }}>
        {children}
    </FormContext.Provider>
}

export function useForm() {
    const { fields, setFields } = useContext(FormContext)
    return { fields, setFields }
}