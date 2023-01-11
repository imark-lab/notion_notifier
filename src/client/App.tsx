import * as React from 'react';
import AppProvider from './providers/App';
import AppRoutes from './routes';

export default function App(){
  return(
    <AppProvider>
      <AppRoutes/>
    </AppProvider>
  )
}