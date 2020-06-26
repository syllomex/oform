import React from 'react';

function Option({children, ...props}) {
    let value = ""

    if (props.value) value = props.value
    else if (!props.value && !props.novalue) value = children
    else if (!props.value && props.novalue) value = ""
    
    return (
        <>
            <option value={value}>{children}</option>
        </>
    );
}

export default Option