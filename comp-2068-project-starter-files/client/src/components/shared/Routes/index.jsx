import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import KeyboardRoutes from '../../Keyboard/routes';
import AuthenticationRoutes from '../../Authentication/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes/>
      <UserRoutes/>
      <KeyboardRoutes/>
      <AuthenticationRoutes/>
    </>
  );
}
 
export default Routes;