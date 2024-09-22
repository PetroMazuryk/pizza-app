import { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface IDocumentTitleProps {
  children: ReactNode;
}

const DocumentTitle: FC<IDocumentTitleProps> = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};

export default DocumentTitle;
