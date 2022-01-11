import { useSearchParams } from 'react-router-dom';
import './App.css';
import LoggedInScreen from './components/LoggedInScreen/LoggedInScreen';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';

function App() {
	const [searchParams] = useSearchParams();

	return <div className='App'>{!searchParams.get('username') ? <WelcomeScreen /> : <LoggedInScreen />}</div>;
}

export default App;
