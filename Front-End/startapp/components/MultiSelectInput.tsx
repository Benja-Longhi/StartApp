import React, { useId } from 'react';
import Select, { type MultiValue } from 'react-select';
import customStyles, { type SelectOption } from './selectCustomStyles';

interface MultiSelectInputProps {
  name: string;
  options: { value: string; label: string }[];
  selectedOptions: string[];
  onSelectedOptionsChange: (selectedOptions: string[]) => void;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  name,
  options,
  selectedOptions,
  onSelectedOptionsChange,
}) => {
  const instanceId = useId();

  const handleSelectChange = (selectedValues: MultiValue<SelectOption>) => {
    const selectedOptionValues = selectedValues.map((option) => option.value);
    onSelectedOptionsChange(selectedOptionValues);
  };

  const selectedOptionValues = options.filter((o) => selectedOptions.includes(o.value));

  return (
    <div className="w-96 h-12">
      <Select
        isMulti
        instanceId={instanceId}
        options={options}
        name={name}
        value={selectedOptionValues}
        onChange={handleSelectChange}
        styles={customStyles}
      />
    </div>
  );
};

export default MultiSelectInput;
