import React, { useState, useRef, useEffect } from 'react';
import styles from './Profile.module.css';
import NoAvatar from './components/NoAvatar/NoAvatar';
import ProfileDropMenu from './components/ProfileDropMenu/ProfileDropMenu';
import { DROP_MENU } from '../../../constants/profileDropMenuList';

type TProfileProps = {
  userName: string;
  avatar?: string;
};

const Profile: React.FC<TProfileProps> = ({ userName, avatar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className={styles.profile} ref={profileRef}>
      {avatar ? <img src={avatar} alt="Аватар пользователя" className={styles.profile__avatar} /> : <NoAvatar userName={userName} />}
      <h2 className={styles.profile__name}>{userName}</h2>
      <button
        type='button'
        className={isOpen ? `${styles.profile__buttonOpen} ${styles.open}` : styles.profile__buttonOpen}
        onClick={handleToggleMenu}
        aria-expanded={isOpen}
        aria-label="Открыть меню профиля"
      ></button>
      <ProfileDropMenu navList={DROP_MENU} isOpen={isOpen} />
    </div>
  );
};

export default Profile;
