import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>Holy guacamole!</strong> {props.alert.mssg}
        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
        ></button>
    </div>
  );
}
