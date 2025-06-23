import styles from './WrapperContent.module.css';

type TWrapperContentProps = {
  children: React.ReactNode;
};

const WrapperContent: React.FC<TWrapperContentProps> = ({ children }) => {
  return <div className={styles.wrapperContent}>{children}</div>;
};

export default WrapperContent;