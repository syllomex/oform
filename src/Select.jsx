import React, { useEffect, useRef } from 'react';
import { useForm } from './FormProvider';

function Select({ children, ...props }) {
    !props.name && console.error("O elemento <Select> precisa de um 'name'.")
    !props.className && (props.className = "form-control")

    const { setFields } = useForm()
    const fieldRef = useRef()

    useEffect(() => {
        setFields(fields => ([
            ...fields,
            fieldRef.current
        ]))
    }, [fieldRef, setFields])

    return (
        <>
            <select ref={fieldRef} {...props}>
                {children}
            </select>
        </>
    );
}

export default Select