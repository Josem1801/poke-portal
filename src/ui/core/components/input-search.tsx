'use client';
/* eslint-disable react/no-nested-component-definitions */
import type { Props } from 'react-select';
import ReactSelect from 'react-select';

import { Control, DropdownIndicator, Placeholder, selectStyles } from './react-select';

export type SelectProps = Props;
export const InputSearch = (props: SelectProps) => {
  const {
    instanceId,
    placeholder,
    isSearchable = true,
    ...field
  } = props;
  return (
    <div className="relative flex rounded-md border-2 w-full  max-w-md mx-auto">
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
