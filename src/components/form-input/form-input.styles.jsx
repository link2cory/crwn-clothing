import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

export const FormInputContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputField = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  letter-spacing: ${(props) => (props.type === "password" ? "0.3em" : null)};
`;

const shrunkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

const fullSizeLabelStyles = css`
  top: 10px;
  font-size: 16px;
  color: ${subColor};
`;

const getFormInputLabelStyles = (props) => {
  return props.value.length ? shrunkLabelStyles : fullSizeLabelStyles;
};

export const FormInputLabel = styled.label`
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  transition: 300ms ease all;
  ${getFormInputLabelStyles};

  ${FormInputField}:focus ~ & {
    ${shrunkLabelStyles}
  }
`;
