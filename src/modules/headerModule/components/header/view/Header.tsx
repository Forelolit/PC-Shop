import type { FC } from 'react';
import styles from './Header.module.scss';
import { Navbar } from '../../navbar';
import { Link } from 'react-router';
import { path } from '@utils/constants/constants';
import { Container } from '@ui/container';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <Link to={path.home}>
            <img src="/" alt="Logo image" />
          </Link>
        </div>

        <Navbar />

        <div>lng changer</div>
      </Container>
    </header>
  );
};
