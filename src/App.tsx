import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import HomeLayout from './Pages/HomeLayout';
import Landing from './Pages/Landing';
import {CssVarsProvider} from '@mui/joy';
import {Provider} from 'react-redux';
import {store} from './store';
import theme from './utils/theme';
const router = createBrowserRouter([
	{path: '/',
		element: <HomeLayout />,
		children: [
			{index: true,
				element: <Landing />},
		]},
]);

function App() {
	return (
		<Provider store={store}>
			<CssVarsProvider theme={theme}>
				<RouterProvider router={router} />
			</CssVarsProvider>
		</Provider>

	);
}

export default App;
