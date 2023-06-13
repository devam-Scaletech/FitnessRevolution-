import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardContainer from 'feature/dashboard/container/dashboardContainer';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='*' element={<Navigate to='/dashboard' />} />
			<Route path='/dashboard' element={<DashboardContainer />} />
		</Routes>
	);
};

export default App;
