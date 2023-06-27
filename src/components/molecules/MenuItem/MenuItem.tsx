import { FC } from 'react';

interface Props {
  icon: string;
  label: string;
}

export const MenuItem: FC<Props> = ({ icon, label }) => {
  return (
    <div className='menu-item'>
      <i className={`${icon} menu-item__icon`}></i>
      <span className='menu-item__link'>{label}</span>
    </div>
  );
};
