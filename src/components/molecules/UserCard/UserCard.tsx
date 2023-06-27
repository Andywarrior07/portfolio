import { FC } from 'react';
import { StaticImageData } from 'next/image';
import { ProfileImage } from '@/components/atoms';

interface Props {
  fullName: string;
  src: StaticImageData;
}

export const UserCard: FC<Props> = ({ fullName, src }) => {
  return (
    <div className='user-card'>
      <div className='user-card__image'>
        <ProfileImage src={src} />
      </div>
      <div className='user-card__info'>
        <span className='user-card__name'>{fullName}</span>
        {/* TODO: Agregar Links de interes y descargar cv - pdf */}
      </div>
    </div>
  );
};
