import GlobalContainer from '../layouts/GlobalContainer';
import '../styles/globals.css';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalContainer>
        <Component {...pageProps} />
      </GlobalContainer>
    </Provider>
  );
}

export default MyApp;
