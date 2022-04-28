import * as React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { UseFormReturn } from 'react-hook-form';
import * as prismicT from '@prismicio/types';

//  OBJECT TYPES
export interface LooseObject {
  [key: string]: any;
}

export interface InputObject {
  input_type: string;
  input_name: string;
  input_placeholder: string;
  is_required: boolean;
}

//  ARRAY TYPES
export type InputsArray = InputObject[];

//  FUNCTION TYPES
export type InputChangeHandler = (
  event:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
) => void;

export type InputBlurHandler = (
  event:
    | React.FocusEvent<HTMLInputElement>
    | React.FocusEvent<HTMLTextAreaElement>
) => void;

export type ValidateInput = (inputName: string) => void;
export type ValidateValue = (value: string) => boolean;
export type ValidateForm = (
  inputsValidArr: boolean[],
  inputsTouchedArr: boolean[]
) => boolean;

export type OnSubmit = (token: { [x: string]: any }) => void;

export type OnVerifyCaptcha = () => void;

//  REACT CHILD WRAPPER TYPE
export interface HOCProps {
  children: React.ReactNode;
}

//  PAGE TYPES
export interface SliceQueryDataObject {
  data: LooseObject;
}

//  SLICE TYPES
export interface SliceProps {
  slice: LooseObject
}

//  UI COMPONENT TYPES
export interface AlertProps {
  text: string;
}

export interface ModalProps extends HOCProps {
  onClose: () => void;
}

export interface BackdropProps {
  onClose: () => void;
}

export interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}

export interface HeaderProps {
  showHeader: boolean;
}

export interface HeadingProps {
  field: prismicT.RichTextField;
  type: string;
}

export interface SectionProps extends HOCProps {
  isHero?: boolean;
}

export interface NavItemObject {
  nav_item_id: string;
  nav_item_link: {
    url: string;
  };
  nav_item_label: string;
}

export interface NavItemProps {
  url: string;
  text: string;
}

export interface LinkButtonListProps {
  array: [
    {
      button_link: {
        url: string;
      };
      button_label: string;
    }
  ];
}

export interface LinkButtonListItemProps extends HOCProps {
  href: string;
}

export interface ProfilePhotoProps {
  image: IGatsbyImageData;
}

export interface SocialListProps {
  email: string;
  gitHub: string;
  isWhite: boolean;
  linkedIn: string;
  showEmail: boolean;
}

export interface ProjectListPropTypes {
  projectsArray: [
    {
      project_title: {
        richText: [];
        text: string;
      };
      project_description: {
        richText: [];
      };
      project_image: {
        gatsbyImageData: IGatsbyImageData;
      };
      project_label: string;
      project_link: {
        url: string;
      };
    }
  ];
}

export interface ProjectItemProps {
  title: [];
  description: [];
  image: IGatsbyImageData;
  link: string;
  label: string;
}

export interface FormProps {
  inputsArray: InputsArray;
}

export interface InputProps {
  name: string;
  placeholder: string;
  register: UseFormReturn['register'];
  type: string;
  errors: {
    [x: string]: any;
  };
}

//  STYLED COMPONENTS
export interface StyledIconProps {
  $isWhite: boolean; // Transient prop
}
