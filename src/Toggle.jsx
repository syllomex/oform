import React, { useEffect, useRef, useState } from 'react';
import { useForm } from './FormProvider';

function Toggle({ children, ...props }) {
    const { setFields } = useForm()
    const fieldRef = useRef()
    const [value, setValue] = useState("")

    useEffect(() => {
        setFields(fields => ([
            ...fields,
            fieldRef.current
        ]))
    }, [fieldRef, setFields])

    useEffect(() => {
        fieldRef.current.value = value
    }, [value])

    function handleClick({value}) {
        setValue(value)
    }

    return (
        <div>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <input required={props.required} name={props.name} type="text" hidden ref={fieldRef} readOnly value={value} />
                {
                    props.buttons.map(button => {
                        return <label
                            key={button.value}
                            className="btn btn-outline-primary"
                            onClick={(e) => handleClick({ value: button.value })}
                        >
                            <input required={props.required}
                                type="radio"
                                value={button.value}
                                name={props.name}
                            />
                            {button.value}
                        </label>
                    })
                }
            </div>
        </div>
    )
}

export default Toggle