import type { StylesConfig } from 'react-select';

export type SelectOption = { value: string; label: string };

const customStyles: StylesConfig<SelectOption, true> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#0D1117',
      border: 'none',
      borderRadius : '0.375rem',
      color: '#B5B2B2',
      height: '3rem',
      width: '20rem',
      padding: '0.2rem',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
      letterSpacing: '0.01em',
      '&:hover': {
        borderColor: '#6366F1',
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: '#3A4D64',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
      letterSpacing: '0.01em',
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: '#35039F',
      color: '#F3F4F6',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
      letterSpacing: '0.01em',
      marginBottom: '0.5rem',
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: '#F3F4F6',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
      letterSpacing: '0.01em',
    }),
    multiValueRemove: (styles) => ({
        ...styles,
        color: '#F3F4F6',
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.25rem',
        letterSpacing: '0.01em',
        '&:hover': {
            backgroundColor: '#35039F',
            color: '#F3F4F6',
        },
    }),
    option: (styles) => {
        return {
            ...styles,
            backgroundColor: '#0D1117',
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.25rem',
            letterSpacing: '0.01em',
            '&:hover': {
            backgroundColor: '#35039F',
            color: '#F3F4F6',
            },
        };
    },
    menu: (styles) => ({
      ...styles,
      backgroundColor: '#0D1117',
      color: '#F3F4F6',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
      letterSpacing: '0.01em',
      maxheight: '10rem',
      overflow: 'auto'
    }),
  };
  
 export default customStyles; 