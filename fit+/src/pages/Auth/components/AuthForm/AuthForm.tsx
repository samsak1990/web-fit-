import React, { useState } from 'react';
import ButtonMain from '../../../../components/Buttons/ButtonMain/ButtonMain';
import styles from './AuthForm.module.css';
import WrapperInput from './components/WrapperInput/WrapperInput';
import Input from '../../../../components/Input/Input';
import Logo from '../../../../components/Logo/Logo';

import LogoImage from '../../../../assets/logo.png';
import CustomCheckbox from '../../../../components/Checkbox/Checkbox';
import TextLink from '../../../../components/TextLink/TextLink';
import { useNavigate } from 'react-router-dom';

const AuthForm: React.FC = () => {
  const navigate = useNavigate();

  // Состояния для логина, пароля и чекбокса
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlerAuthorisation = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError('');
    setPasswordError('');
    setFormError('');

    let hasError = false;
    if (!login.trim()) {
      setLoginError('Введите логин');
      hasError = true;
    }
    if (!password.trim()) {
      setPasswordError('Введите пароль');
      hasError = true;
    }
    if (hasError) return;

    setLoading(true);
    // Имитация авторизации (логин: admin, пароль: 1234)
    await new Promise(res => setTimeout(res, 700));
    if (login === 'admin' && password === '1234') {
      navigate('/analitic');
    } else {
      setLoginError('invalid');
      setPasswordError('invalid');
      setFormError('Неверный логин или пароль');
    }
    setLoading(false);
  };

  return (
    <div className={styles.wrapperAuthForm}>
      <Logo image={LogoImage} />
      <form onSubmit={handlerAuthorisation} className={styles.authForm} style={{ position: 'relative' }}>
        <WrapperInput>
          <Input placeholder="Логин" value={login} setValue={setLogin} error={loginError === 'Введите логин' ? loginError : ''} noStyle={true} invalid={loginError === 'invalid'} />
        </WrapperInput>
        <WrapperInput>
          <Input placeholder="Пароль" value={password} setValue={setPassword} secret={true} error={passwordError === 'Введите пароль' ? passwordError : ''} noStyle={true} invalid={passwordError === 'invalid'} />
        </WrapperInput>
        <WrapperInput>
          <CustomCheckbox
            label="Запомнить меня"
            checked={rememberMe}
            onChange={() => setRememberMe((prev) => !prev)}
          />
        </WrapperInput>
        <ButtonMain text={loading ? 'Вход...' : 'Войти'} type="submit" disabled={loading} />
        {/* Общая подсказка справа при неверных данных */}
        {formError && login && password && (
          <div className={styles.inputErrorTooltip}>{formError}</div>
        )}
      </form>
      <WrapperInput>
        <p className={styles.authForm__help}>
          Возникли трудности? <TextLink text="Тех.поддержка" />
        </p>
      </WrapperInput>
    </div>
  );
};

export default AuthForm;
