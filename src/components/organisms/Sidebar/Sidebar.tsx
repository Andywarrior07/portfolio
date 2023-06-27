'use client';
import { MenuItem, UserCard } from '@/components/molecules';
import defaultProfilePicture from '@/assets/images/default-user.jpeg';

export const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <UserCard
        fullName='Andrés Guerrero Cabrera'
        src={defaultProfilePicture}
      />

      <div className='sidebar__menu'>
        <MenuItem icon='fas fa-users' label='Experience' />
        <MenuItem icon='fas fa-user' label='About Me' />
        <MenuItem icon='fas fa-users' label='Works' />
        <MenuItem icon='fas fa-users' label='Blog' />
        <MenuItem icon='fas fa-users' label='Contact' />
      </div>
    </nav>
  );
};
