import React, { useState, useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../models/validationSchema';
import { encode } from '../../utils/functions';
import { FormProps, OnSubmit } from '../../models/types';
import styled from 'styled-components';
import UiContext from '../../store/ui-context';
import Button from './Button';
import Input from './Input';
import ReCAPTCHA from 'react-google-recaptcha';
import Spinner from './Spinner';

const StyledForm = styled.form`
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

  const recaptchaChangeHandler = () => {
    setButtonDisabled(false);
  };

  const onSubmit: OnSubmit = async (data) => {
    setIsSubmitting(true);
    const recaptchaValue = recaptchaRef.current?.getValue();

    if (recaptchaValue) {
      console.log(data);

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
          // set succcess
          //  alert success
          alert('Contact Form Submitted Successfully!');
          //  reset form
          reset();
        }
      } catch (error) {
        //  alert error
        alert(error);
      }
    } else {
      alert('Complete ReCaptcha');
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
        <ReCAPTCHA
          id="recaptcha-google"
          ref={recaptchaRef}
          sitekey={process.env.GATSBY_GOOGLE_RECAPTCHA_SITE_KEY!}
          theme={captchaTheme}
          onChange={recaptchaChangeHandler}
        />
        {!isSubmitting ? (
          <Button type="submit" disabled={buttonDisabled}>
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
