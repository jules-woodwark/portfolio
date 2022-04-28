import React from 'react';
import { InputProps } from '../../models/types';
import styled from 'styled-components';

const StyledInputGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  letter-spacing: 0.1rem;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`;

const StyledInput = styled.input`
  appearance: none;
  background-clip: padding-box;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ced4da;
  box-sizing: border-box;
  color: #212529;
  font-weight: 400;
  line-height: 2;
  padding: 6px 12px;
  width 100%;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;

const StyledTextArea = StyledInput.withComponent('textarea');

const StyledErrorText = styled.p`
  color: ${(props) => props.theme.uiBackground};
`;

const Input = ({ errors, name, placeholder, register, type }: InputProps) => {
  let errorMessage;

  if (errors.name) {
    errorMessage = (
      <StyledErrorText role="alert">{errors[name].message}</StyledErrorText>
    );
  }

  let inputElement = null;

  switch (type) {
    case 'text':
    case 'email':
      inputElement = (
        <StyledInput
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register(name!)}
          placeholder={placeholder}
          type={type}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <StyledTextArea
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register(name!)}
          placeholder={placeholder}
          rows={4}
        />
      );
      break;
  }

  return (
    <StyledInputGroup>
      <StyledLabel htmlFor={name}>{name}</StyledLabel>
      {inputElement}
      {errorMessage}
    </StyledInputGroup>
  );
};

export default Input;
