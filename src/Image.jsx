import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from './FormProvider';
import { useState } from 'react';

function changePreview(setImage, e) {
    let imageUrl = URL.createObjectURL(e.target.files[0])
    setImage(imageUrl)
}

function Image({ children, ...props }) {
    if (!props.name) console.error("O elemento <File> precisa de um 'name'.")
    !props.id && (props.id = props.name)

    const { setFields } = useForm()
    const fieldRef = useRef()
    const [image, setImage] = useState(null)

    if (!image)
        setImage(props.initialpreview)

    useEffect(() => {
        setFields(fields => ([
            ...fields,
            fieldRef.current
        ]))
    }, [fieldRef, setFields])

    return (
        <div>
            <label {...props.labelprops && props.labelprops} htmlFor={props.id}>{children}</label>
            <div>
                {props.preview &&
                    props.preview === "true" &&
                    <img className="img-fluid" style={{ maxWidth: "18rem" }} src={image} alt="Pré Visualização" />}
            </div>
            <input ref={fieldRef} id={props.id} name={props.name} type="file" hidden
                onChange={changePreview.bind(this, setImage)} {...props} />
        </div>
    );
}

export default Image;