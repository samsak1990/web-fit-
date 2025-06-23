import styles from './Auth.module.css';
import AuthForm from './components/AuthForm/AuthForm';

const Auth: React.FC = () => {
  return (
    <div className={styles.auth}>
      <AuthForm />
      <div className={styles.auth__greeting}>
        <p>
          Привет! <br />
          Спасибо, что помогаешь нам сделать заботу о себе естественной частью
          жизни
        </p>
        <p>
          Вместе мы дарим девушкам больше энергии, уверенности и любви к своему
          телу — без стресса и перегрузок.!
        </p>
      </div>
    </div>
  );
};

export default Auth;
