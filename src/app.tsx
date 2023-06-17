import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardContainer from 'feature/dashboard/container/dashboardContainer';
import UserActivityContainer from 'feature/userActivity/container/userActivityContainer';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='*' element={<Navigate to='/dashboard' />} />
			<Route path='/dashboard' element={<DashboardContainer />} />
			<Route path='/activity/:activityId' element={<UserActivityContainer />} />
		</Routes>
	);
};

export default App;
