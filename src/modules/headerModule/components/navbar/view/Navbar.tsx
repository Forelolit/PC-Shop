import { navItems } from '@utils/constants/constants';
import type { FC } from 'react';
import { Link } from 'react-router';
import styles from './Navbar.module.scss';
import { Typography } from '@ui/typography';

export const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {navItems.map(({ id, label, to }) => (
          <li key={id}>
            <Typography>
              <Link to={to}>{label}</Link>
            </Typography>
          </li>
        ))}
      </ul>
    </nav>
  );
};
