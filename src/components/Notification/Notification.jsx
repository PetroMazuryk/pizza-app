import scss from './Notification.module.scss';

const Notification = ({ message, text, error }) => {
  return (
    <div className={scss.messageWrapper}>
      <p className={scss.message}>{message}</p>
      <p className={scss.message}>{text}</p>
      <p className={scss.message}>{error}</p>
    </div>
  );
};

export default Notification;
