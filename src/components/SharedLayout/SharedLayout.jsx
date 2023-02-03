import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from 'components/Box';
import AppBar from 'components/AppBar';

const SharedLayout = () => {
  return (
    <Box
      as="header"
      bg="grey.0"
      borderBottom="1px solid black">
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default SharedLayout;