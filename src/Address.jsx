import React from 'react';
import Input from './Input'
import Label from './Label';

function Address({ ...props } = {}) {
    !props.street && (props.street = {})
    !props.number && (props.number = {})
    !props.district && (props.district = {})
    !props.city && (props.city = {})

    !props.street.name && (props.street.name = "street")
    !props.number.name && (props.number.name = "number")
    !props.district.name && (props.district.name = "district")
    !props.city.name && (props.city.name = "city")

    !props.street.label && (props.street.label = "Rua")
    !props.number.label && (props.number.label = "Número")
    !props.district.label && (props.district.label = "Bairro")
    !props.city.label && (props.city.label = "Cidade")


    return (
        <div className="row">
            <div className="col-12">
                <Label text={props.street.label}>
                    <Input required={props.required}
                        name={props.street.name}
                        {...props.street}
                        type="text"
                    />
                </Label>
            </div>
            <div className="col-4 col-md-2 pr-1">
                <Label text={props.number.label}>
                    <Input required={props.required}
                        name={props.number.name}
                        {...props.number}
                        type="text"
                    />
                </Label>
            </div>
            <div className="col-8 col-md-10 pl-1">
                <Label text={props.district.label}>
                    <Input required={props.required}
                        name={props.district.name}
                        {...props.district}
                        type="text"
                    />
                </Label>
            </div>
            <div className="col-12">
                <Label text={props.city.label}>
                    <Input required={props.required}
                        name={props.city.name}
                        {...props.city}
                        type="text"
                    />
                </Label>
            </div>
        </div>
    );
}

export default Address;