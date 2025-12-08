import styles from './RegisterForm.module.scss';
import { useState, type FC } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button, Typography } from '@ui/index';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import type { Inputs } from '../types/types';
import { useAuthStore } from '@store/useAuthStore';
import { useNavigate } from 'react-router';

const passwordRules = [
  { label: 'Минимум 8 символов', test: (val: string) => val.length >= 8 },
  { label: 'Хотя бы одна заглавная буква (A–Z)', test: (val: string) => /[A-Z]/.test(val) },
  { label: 'Хотя бы одна строчная буква (a–z)', test: (val: string) => /[a-z]/.test(val) },
];

export const RegisterForm: FC = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.setUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    user({ id: crypto.randomUUID(), name: data.name });
    navigate('/');
  };
  const password = watch('password', '');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <section className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          placeholder="Введите имя"
          {...register('name', {
            required: 'Имя обязательно для заполнения',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Имя должно содержать только латинские буквы',
            },
            maxLength: {
              value: 20,
              message: 'Максимум 20 символов',
            },
            minLength: {
              value: 3,
              message: 'Минимум 3 символа',
            },
          })}
        />
        {errors.name && <Typography color="error">{errors.name.message}</Typography>}

        <input
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder="Введите пароль"
          {...register('password', {
            required: 'Пароль обязателен',
            validate: (val) => {
              for (const rule of passwordRules) {
                if (!rule.test(val)) return 'Пароль не соответствует требованиям';
              }
              return true;
            },
          })}
        />
        {!isPasswordVisible ? (
          <Button color="white" icon onClick={() => setIsPasswordVisible(true)}>
            <EyeIcon stroke="black" />
          </Button>
        ) : (
          <Button icon onClick={() => setIsPasswordVisible(false)}>
            <EyeOffIcon />
          </Button>
        )}

        {errors.password && <Typography color="error">{errors.password.message}</Typography>}

        <ul>
          {passwordRules.map((rule) => (
            <li key={rule.label} style={{ color: rule.test(password) ? 'green' : 'red' }}>
              {rule.test(password) ? '✅' : '❌'} {rule.label}
            </li>
          ))}
        </ul>

        <input
          type="password"
          placeholder="Повторите пароль"
          {...register('repeatPassword', {
            required: 'Повторите пароль',
            validate: (value) => value === password || 'Пароли не совпадают',
          })}
        />
        {errors.repeatPassword && (
          <Typography color="error">{errors.repeatPassword.message}</Typography>
        )}

        <Button size="small" fullWidth>
          Регистрация
        </Button>
      </form>
    </section>
  );
};
