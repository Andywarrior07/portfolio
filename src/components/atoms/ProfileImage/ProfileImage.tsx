import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData;
}
export const ProfileImage: FC<Props> = ({ src }) => {
  return (
    <div className='profile-image'>
      <Image
        className='profile-image__image'
        src={src}
        width={50}
        height={50}
        alt='Profile Image'
      />
    </div>
  );
};
