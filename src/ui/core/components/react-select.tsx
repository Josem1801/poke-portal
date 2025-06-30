'use client';

import type { ReactNode } from 'react';
import type {
  ControlProps,
  DropdownIndicatorProps,
  StylesConfig,
} from 'react-select';
import { components } from 'react-select';

import { Search } from '@/ui/icons/search';

export const Control = (props: ControlProps & { text?: string }) => {
  return (
    <>
      <components.Control {...props}></components.Control>
    </>
  );
};

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <Search className="pr-1" />
    </components.DropdownIndicator>
  );
};

export const Placeholder = ({ text }: { text: ReactNode }) => {
  return (
    <p className="text-md absolute ml-1 mt-0.5 font-bold text-gray-400">{text}</p>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const selectStyles = {
  container: (provided, state) => ({
    ...provided,
    width: '100%',
    border: 'none',
    boxSizing: 'content-box',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    opacity: state.isDisabled ? 0.6 : 1,
  }),
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    height: 'fit-content',
    background: 'transparent',
    padding: '1px 0',
    position: 'static',
    pointerEvents: state.isDisabled ? 'auto' : 'auto',
    cursor: state.isDisabled ? 'not-allowed' : 'auto',
  }),
  valueContainer: provided => ({
    ...provided,
    fontSize: '1rem',
    paddingLeft: '0.90rem',
    padding: ' 0.5rem 0 0.4rem 0',
    position: 'static',
    overflow: 'visible',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: '0px 6px',
  }),
  indicatorsContainer: provided => ({
    ...provided,
  }),
  singleValue: provided => ({
    ...provided,
    fontWeight: 700,
    color: '#403e3f',
    whiteSpace: 'normal',
    paddingRight: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    paddingTop: '0.5rem',
    fontWeight: 500,
    color: state.isSelected ? '#fff' : '#403e3f',
    fontSize: '1rem',
  }),
  menu: provided => ({
    ...provided,
    zIndex: '99',
  }),
  menuPortal: provided => ({
    ...provided,
    zIndex: '99999',
  }),
  input: provided => ({
    ...provided,
    fontWeight: 700,
    fontSize: '1rem',
  }),
} satisfies StylesConfig;
