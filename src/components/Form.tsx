import React, { useState, useContext, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../models/validationSchema';
import { encode } from '../utils/functions';
import { FormProps, OnSubmit } from '../models/types';
import styled from 'styled-components';
import UiContext from '../store/ui-context';
import Button from './UI/Button';
import Input from './UI/Input';
import ReCAPTCHA from 'react-google-recaptcha';
import Spinner from './UI/Spinner';

const StyledForm = styled.form`
  background-color: ${(props) => props.theme.formBackground};
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
`;

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 540px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const RecaptchaWrapper = styled.div`
  transform: scale(0.5);

  @media (min-width: 225px) {
    transform: scale(0.6);
  }

  @media (min-width: 255px) {
    transform: scale(0.7);
  }

  @media (min-width: 275px) {
    transform: scale(0.75);
  }

  @media (min-width: 285px) {
    transform: scale(0.8);
  }

  @media (min-width: 300px) {
    transform: scale(0.85);
  }

  @media (min-width: 315px) {
    transform: scale(0.9);
  }

  @media (min-width: 375px) {
    transform: scale(1);
  }
`;

const HiddenLabel = styled.label`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const Form = ({ inputsArray }: FormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const uiCtx = useContext(UiContext);
  const { showAlert } = uiCtx;

  const recaptchaChangeHandler = () => {
    setButtonDisabled(false);
  };

  const onSubmit: OnSubmit = async (data) => {
    setIsSubmitting(true);
    const recaptchaValue = recaptchaRef.current?.getValue();

    if (recaptchaValue) {
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact-form',
            'g-recaptcha-response': recaptchaValue,
            ...data,
          }),
        });

        if (response.ok) {
          showAlert('success', 'Form submitted successfully!');
          reset();
        }
      } catch (error) {
        showAlert('error', 'Form submission error!', error);
      }
    } else {
      showAlert('warning', 'Complete ReCaptcha!');
    }
    setIsSubmitting(false);
  };

  const { theme } = uiCtx;
  const captchaTheme = theme === 'light' ? 'light' : 'dark';

  const formFieldsMap = inputsArray.map((input) => (
    <Input
      key={input.input_name}
      type={input.input_type}
      name={input.input_name}
      placeholder={input.input_placeholder}
      register={register}
      errors={errors}
    />
  ));

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      name="contact-form"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="got-ya"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      {formFieldsMap}
      <HiddenLabel htmlFor="got-ya">
        Don't fill this out if you're human:
        <input tabIndex={-1} {...register('got-ya')} />
      </HiddenLabel>
      <StyledDiv>
        <RecaptchaWrapper>
          <ReCAPTCHA
            id="recaptcha-google"
            ref={recaptchaRef}
            sitekey={process.env.GATSBY_GOOGLE_RECAPTCHA_SITE_KEY!}
            theme={captchaTheme}
            onChange={recaptchaChangeHandler}
          />
        </RecaptchaWrapper>
        {!isSubmitting ? (
          <Button type="submit" disabled={buttonDisabled} isForm>
            Submit
          </Button>
        ) : (
          <Spinner />
        )}
      </StyledDiv>
    </StyledForm>
  );
};

export default Form;
