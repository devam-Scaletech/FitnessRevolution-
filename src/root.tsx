import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ErrorBoundary from 'shared/components/errorBoundary/errorBoundary';
import reducer from 'feature/dashboard/store/dashboard.reducer';
import App from './app';
import 'assets/styles/app.scss';

const Root: React.FC = (props) => {
	const store = createStore(reducer);
	return (
		<ErrorBoundary>
			<Provider store={store}>
				<BrowserRouter>
					<App {...props} />
				</BrowserRouter>
			</Provider>
		</ErrorBoundary>
	);
};

export default Root;
