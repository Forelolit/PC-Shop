import type { FC } from 'react';
import styles from './Header.module.scss';
import { Navbar } from '../../navbar';
import { Link } from 'react-router';
import { langOptions, path } from '@utils/constants/constants';
import { Container, Button, Typography, Dropdown } from '@ui/index';
import { HeartIcon, ShoppingBasketIcon, User2 } from 'lucide-react';

const user = {
  id: 1,
  name: 'Aki',
  isUserAuth: true,
};

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

        <div className={styles.userFeatures}>
          <Dropdown options={langOptions} />

          <div className={styles.buttons}>
            <Link to={path.favoritePage}>
              <Button variant="outline">
                <HeartIcon />
              </Button>
            </Link>
            <Link to={path.cartPage}>
              <Button variant="outline">
                <ShoppingBasketIcon />
              </Button>
            </Link>
          </div>

          <div>
            {user.isUserAuth ? (
              <Link to={'/'} className={styles.user}>
                <Typography>{user.name ? user.name : 'User name'}</Typography>
                <span className={styles.userAvatar}>
                  <User2 />
                </span>
              </Link>
            ) : (
              <div className={styles.authButtons}>
                <Button size="small" variant="outline">
                  Регистрация
                </Button>
                <Button size="small" variant="outline">
                  Войти
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
