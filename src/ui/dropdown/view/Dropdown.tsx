import styles from './Dropdown.module.scss';
import { useRef, useState, type FC } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDownIcon } from 'lucide-react';
import { Typography } from '@ui/index';
import type { DropdownProps } from '../types/types';
import { Link } from 'react-router';
import classNames from 'classnames';

export const Dropdown: FC<DropdownProps> = ({
  options,
  title,
  onClick,
  className,
  variant = 'border',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  gsap.registerPlugin(useGSAP);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.defaults({ duration: 0.2 });

      if (isOpen) {
        gsap.to('.icon', { rotateX: 180 });
        gsap.to(`.${styles.result}`, { opacity: 1, display: 'block', y: 0 });
      } else {
        gsap.to('.icon', { rotateX: 0 });
        gsap.to(`.${styles.result}`, {
          opacity: 0,
          y: 50,
          onComplete: () => {
            gsap.set(`.${styles.result}`, { display: 'none', y: 50 });
          },
        });
      }
    },
    { scope: container, dependencies: [isOpen] }
  );

  return (
    <div ref={container} className={classNames(styles.wrapper, className)}>
      <div
        className={classNames(styles.dropdown, variant === 'border' ? styles.border : null)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* FIXME Доделать */}
        <Typography className={styles.title}>{title ? title : options[0].label}</Typography>
        <ChevronDownIcon className="icon" />
      </div>

      <div className={styles.result} onClick={onClick}>
        {options.map((i) =>
          i.link ? (
            <Link to={i.link} key={i.id}>
              <Typography>{i.label}</Typography>
            </Link>
          ) : (
            <Typography key={i.id}>{i.label}</Typography>
          )
        )}
      </div>
    </div>
  );
};
