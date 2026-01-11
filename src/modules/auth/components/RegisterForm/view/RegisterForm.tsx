import styles from './RegisterForm.module.scss';
import { useState, type FC } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button, Container, Typography } from '@ui/index';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import type { Inputs } from '../types/types';
import { useAuthStore } from '@store/useAuthStore';
import { Link, useNavigate } from 'react-router';
import { path } from '@utils/constants/constants';
import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';
import { authApi } from '@utils/lib/requester';

const passwordRules = [{ label: 'Минимум 8 символов', test: (val: string) => val.length >= 8 }];

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
    user({ id: Math.random(), name: data.name });
    navigate('/');
  };
  const password = watch('password', '');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    const googleToken = credentialResponse.credential;

    if (googleToken) {
      try {
        const data = await authApi.googleLogin(googleToken);

        console.log('Успешный вход!', data);

        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);

        user(data.user);

        navigate('/');
      } catch (error) {
        console.error('Ошибка при входе на бэкенд', error);
      }
    }
  };

  return (
    <section className={styles.wrapper}>
      <Container className={styles.container}>
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

        <div className={styles.googleAuth}>
          <Link to={path.login}>Already have account?</Link>
          <span className={styles.separator} />
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => {
              console.error('Sign in failed');
            }}
          />
        </div>
      </Container>
    </section>
  );
};
