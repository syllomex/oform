import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from './FormProvider';

function Input({ ...props }) {
    !props.name && console.error("O elemento <Input> precisa de um 'name'.")
    !props.className && (props.className = "form-control")
    !props.type && (props.type = "text")

    const { setFields } = useForm()
    const fieldRef = useRef()

    useEffect(() => {
        setFields(fields => ([
            ...fields,
            fieldRef.current
        ]))
    }, [fieldRef, setFields])

    return (
        <React.Fragment>
            <input ref={fieldRef}
                {...props}
            />
        </React.Fragment>
    );
}

export default Input;