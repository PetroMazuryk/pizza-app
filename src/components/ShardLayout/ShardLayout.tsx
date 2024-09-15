import { Suspense, FC } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import Header from '../Header/Header';

const ShardLayout: FC = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default ShardLayout;
