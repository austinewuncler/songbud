/* eslint-disable react/jsx-max-depth */
import { SwitchProps, VisuallyHidden, useSwitch } from '@nextui-org/react';
import React, { useEffect } from 'react';

const ThemeSwitch = (props: SwitchProps) => {
  const {
    Component,
    getBaseProps,
    getInputProps,
    getWrapperProps,
    isSelected,
    slots,
  } = useSwitch(props);

  useEffect(() => {
    document.querySelector('html')?.classList.toggle('dark', isSelected);
  }, [isSelected]);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              'h-8 w-8',
              'flex items-center justify-center',
              'rounded-lg bg-default-100 hover:bg-default-200',
            ],
          })}
        >
          {isSelected ?
            <span className="icon-[heroicons--moon-16-solid]" />
          : <span className="icon-[heroicons--sun-16-solid]" />}
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitch;
