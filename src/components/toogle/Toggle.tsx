import React from 'react';

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
  label?: string;
  firstOption?: string;
  secondOption?: string;
};

export const Toggle = ({
  checked,
  onChange,
  label,
  firstOption,
  secondOption,
}: ToggleProps) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      {label && <h3 className="text-gray-600 font-semibold">{label}</h3>}
      <div className="flex gap-4 items-center">
        {firstOption && <span>{firstOption}</span>}

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
        </label>
        {secondOption && <span>{secondOption}</span>}
      </div>
    </div>
  );
};
