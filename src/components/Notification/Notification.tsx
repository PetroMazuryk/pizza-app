import { FC } from 'react';

import scss from './Notification.module.scss';

interface INotificationProps {
  message: string;
  text: string;
  error: string;
}

const Notification: FC<INotificationProps> = ({ message, text, error }) => {
  return (
    <div className={scss.messageWrapper}>
      <p className={scss.message}>{message}</p>
      <p className={scss.message}>{text}</p>
      <p className={scss.message}>{error}</p>
    </div>
  );
};

export default Notification;
