'use client';

/* eslint-disable react/no-nested-component-definitions */
import type { Props } from 'react-select';
import dynamic from 'next/dynamic';

import {
  Control,
  DropdownIndicator,
  Placeholder,
  selectStyles,
} from './react-select';

const ReactSelect = dynamic(() => import('react-select'), { ssr: false });

export type SelectProps = Props;
export const InputSearch = (props: SelectProps) => {
  const { instanceId, placeholder, isSearchable = true, ...field } = props;
  return (
    <div className="relative mx-auto flex w-full max-w-md rounded-md border-2">
      <ReactSelect
        instanceId={instanceId}
        components={{
          Control: props => <Control {...props} />,
          Placeholder: () => <Placeholder text={placeholder} />,
          IndicatorSeparator: () => null,
          DropdownIndicator,
        }}
        isSearchable={isSearchable}
        styles={selectStyles}
        {...field}
      />
    </div>
  );
};
