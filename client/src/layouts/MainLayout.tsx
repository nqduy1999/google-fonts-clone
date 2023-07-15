import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface MetaItem {
  title: string;
  content: string;
}

interface Props {
  children: ReactNode;
  title: string;
  meta?: MetaItem[];
}

const prefixTitle = 'Google Fonts';

export default function MainLayout(props: Props) {
  const { children, meta, title } = props;

  const onMapperTitle = () => {
    return title + ' - ' + prefixTitle;
  };

  return (
    <Box>
      <Helmet
        title={onMapperTitle()}
        htmlAttributes={{ lang: 'en' }}
        meta={meta}
      />
      <main>{children}</main>
    </Box>
  );
}
