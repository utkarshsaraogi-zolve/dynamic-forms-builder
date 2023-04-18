import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import '@aws-amplify/ui-react/styles.css';
import {ThemeProvider} from "@aws-amplify/ui-react";

import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';
import studioTheme from './ui-components/studioTheme';

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={studioTheme}>
      <App />
    </ThemeProvider>
);
