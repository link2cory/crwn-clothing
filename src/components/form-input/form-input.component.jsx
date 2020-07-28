import React from "react";

import "./form-input.styles.scss";
import {
  FormInputContainer,
  FormInputField,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormInputContainer>
    <FormInputField onChange={handleChange} {...otherProps} />
    {label ? <FormInputLabel {...otherProps}>{label}</FormInputLabel> : null}
  </FormInputContainer>
);

export default FormInput;
