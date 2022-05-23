import * as React from 'react';

export default function MyCustomButton (props) {
    return (
        <button className={props.className}
                type={props.type}
                disabled={props.disabled}
                onClick={props.onClick}
        >{props.children}</button>
    )
}