import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './components/Routes';

function App() {
  // Function to make the API request to keep deployment alive
  const makeRequest = async () => {
      try {
          const response = await axios.get(process.env.REACT_APP_TRIGGER_URL_DEPLOYMENT);
          console.log('Response:');
      } catch (error) {
          console.error('Error making the request:', error);
      }
  };


  useEffect(() => {
    // Make the initial request when the component mounts
    makeRequest();

    // Set interval to make the request every 14 minutes (14 * 60 * 1000 milliseconds)
    const intervalId = setInterval(makeRequest, 14 * 60 * 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='app'>
      <Router>
        <Header/>
        {/* <Footer/> */}
        <Routing/>
      </Router>
    </div>
  );
}

export default App;
