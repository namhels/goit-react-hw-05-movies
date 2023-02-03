import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from 'components/Box';
import AppBar from 'components/AppBar';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default SharedLayout;