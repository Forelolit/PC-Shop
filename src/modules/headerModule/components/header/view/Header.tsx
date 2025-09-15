import type { FC } from 'react';
import styles from './Header.module.scss';
import { Navbar } from '../../navbar';
import { Link } from 'react-router';
import { path } from '@utils/constants/constants';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={path.home}>Link</Link>
      </div>

      <Navbar />
    </header>
  );
};
