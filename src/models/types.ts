import React, { ReactElement } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { UseFormReturn } from 'react-hook-form';
import * as prismicT from '@prismicio/types';

//  SHARED TYPES
export type ContextType = 'body' | 'nav' | 'sideDrawer';
export type AlertType = 'error' | 'success' | 'warning';

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

export type ShowAlertFunction = (
  type: AlertType,
  message: string,
  error?: unknown
) => void;

export type useKeyListenersFunction = (
  ref: React.RefObject<HTMLElement>,
  onClose: () => void
) => void;

//  WRAPPER TYPES
export interface HOCProps {
  children: React.ReactNode;
}

export interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: ReactElement) => ReactElement;
  children: ReactElement;
}

//  PAGE TYPES
export interface PrismicDocumentProps {
  data: LooseObject;
}

//  SLICE TYPES
export interface SliceProps {
  slice: LooseObject;
}

//  COMPONENT TYPES

export interface AlertMessageProps {
  text: string;
  alertType: AlertType;
}

export interface AlertIconProps {
  alertType: 'error' | 'success' | 'warning';
}

export interface ModalProps extends HOCProps {
  ariaLabel: string;
  modalIsOpen: boolean;
  onClose: () => void;
}

export interface ModalOverlayProps extends HOCProps {
  setRef: React.RefObject<HTMLElement>;
}

export interface BackdropProps {
  children?: React.ReactNode;
  onClick: () => void;
  role?: string;
  model?: any;
  ariaLabel?: string;
}

export interface BurgerIconProps {
  onClick: () => void;
}

export interface ButtonProps {
  children: JSX.Element | string;
  disabled?: boolean;
  isCard?: boolean;
  isForm?: boolean;
  isNav?: boolean;
  isSideDrawer?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export interface CloseButtonProps {
  onClick: () => void;
  closeType?: 'modal' | 'sideDrawer' | 'error' | 'success' | 'warning';
}

export interface HeaderProps {
  isSolid: boolean;
  isMobile: boolean;
}

export interface HeadingProps {
  field: prismicT.RichTextField;
  type: string;
}

export interface SectionProps extends HOCProps {
  id?: string;
  isHero?: boolean;
  isResume?: boolean;
  isFooter?: boolean;
}

export interface LogoProps {
  isSideDrawer?: boolean;
}

export interface NavProps {
  isMobile: boolean;
}

export interface NavItemObject {
  nav_item_id: string;
  nav_item_link: {
    url: string;
  };
  nav_item_label: string;
}

export interface NavItemsProps {
  contextType: ContextType;
}

export interface NavAnchorProps {
  url: string;
  text: string;
}

export interface LinkButtonListProps {
  contextType: ContextType;
  linksArray: [
    {
      button_link: {
        url: string;
      };
      button_label: string;
    }
  ];
}

export interface LinkButtonListItemProps {
  children: string;
  href: string;
  download?: boolean;
}

export interface ProfilePhotoProps {
  image: IGatsbyImageData;
}

export interface SocialListProps {
  contextType: ContextType;
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

export interface ResumeButtonProps {
  contextType?: ContextType;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

export interface ToggleThemeProps {
  contextType: ContextType;
}

//  STYLED COMPONENTS
export interface StyledIconProps {
  $isWhite: boolean; // Transient prop
}

//  CONTEXT TYPES
export interface AlertStateObject {
  message: string;
  type: AlertType;
}

export interface Size {
  width: number | string;
  height: number | string;
}
