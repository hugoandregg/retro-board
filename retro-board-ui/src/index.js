import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const container = document.getElementById('root');
const root = createRoot(container);

function AppWrapper() {
	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
}

root.render(
	<React.StrictMode>
		<AppWrapper />
	</React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
