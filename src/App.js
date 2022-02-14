import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './components/Store';
import Routes from './routes';
import { Container } from '@material-ui/core/';
import Header from './components/Header';

const App = () => {
  
  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
  
  if(localCart !== null) {
    Store.dispatch({type: 'CHANGE_CART', localCart})
  }
  
  return(
    <Provider Store={Store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <Routes />
        </Router>
      </Container> 
    </Provider>
  )
}

export default App;

