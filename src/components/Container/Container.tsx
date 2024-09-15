import { FC, ReactNode } from 'react';
import scss from './Container.module.scss';

interface IContainerProps {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
  return <div className={scss.container}>{children}</div>;
};

export default Container;
