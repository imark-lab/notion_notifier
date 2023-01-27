import * as React from 'react';
import AppProvider from './providers/App';
import AppRoutes from './routes';
import BasicLayout from './components/layouts/layout';

export default function App() {
  return (
    <BasicLayout>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BasicLayout>
  )
}