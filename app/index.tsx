import * as React from 'react';
import Home from './home';

export const options = {
  title: 'Home',
  headerStyle: { backgroundColor: '#f4511e' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },
};

export default function Layout() {
    return <Home />
}

