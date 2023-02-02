import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from 'components/Box';
import AppBar from 'components/AppBar';

const SharedLayout = () => {
  return (
    <Box p={4}>
      <div>8888888888</div>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default SharedLayout;