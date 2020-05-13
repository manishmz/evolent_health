import React, { Fragment } from "react";

const FormGroup = ({ label, inputType }) => {
  return (
    <Fragment>
      <label htmlFor="defaultFormContactNameEx" className="grey-text">
        {label}
      </label>
      <input
        type={inputType}
        id="defaultFormContactNameEx"
        className="form-control"
      />
    </Fragment>
  );
};

export default FormGroup;
