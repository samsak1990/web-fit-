import React from 'react';
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

  const handlerAuthorisation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Auth');
    navigate('/analitic');
  };

  return (
    <div className={styles.wrapperAuthForm}>
      <Logo image={LogoImage} />
      <form onSubmit={handlerAuthorisation} className={styles.authForm}>
        <WrapperInput>
          <Input placeholder="Логин" />
        </WrapperInput>
        <WrapperInput>
          <Input placeholder="Пароль" />
        </WrapperInput>
        <WrapperInput>
          <CustomCheckbox
            label="Запомнить меня"
            checked={false}
            onChange={() => {}}
          />
        </WrapperInput>
        <ButtonMain text="Войти" type="submit" />
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
