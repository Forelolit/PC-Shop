import type { FC } from 'react';
import styles from './Header.module.scss';
import { Navbar } from '../../navbar';
import { Link } from 'react-router';
import { langOptions, path } from '@utils/constants/constants';
import { Container, Button, Typography, Dropdown } from '@ui/index';
import { HeartIcon, ShoppingBasketIcon, User2 } from 'lucide-react';
import { useAuthStore } from '@store/useAuthStore';

export const Header: FC = () => {
  const { isAuth, user, logout } = useAuthStore();

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <Link to={path.home}>
            <strong>PC</strong>SHOP
          </Link>
        </div>

        <Navbar />

        <div className={styles.userFeatures}>
          <Dropdown options={langOptions} />

          {isAuth && (
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
          )}

          <div>
            {isAuth ? (
              <Link to={'/'} className={styles.user}>
                <Typography>{user?.name ? user.name : 'User name'}</Typography>
                <span className={styles.userAvatar}>
                  <User2 />
                </span>
                <Button size="small" onClick={() => logout()}>
                  Выйти
                </Button>
              </Link>
            ) : (
              <div className={styles.authButtons}>
                <Link to={path.registration}>
                  <Button size="small" variant="outline">
                    Регистрация
                  </Button>
                </Link>
                <Link to={path.login}>
                  <Button size="small" variant="outline">
                    Войти
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
