import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: React.ReactNode
}

export default function AppProvider(props: Props) {
  return (
    <BrowserRouter>
      {props.children}
    </BrowserRouter>
  );
}