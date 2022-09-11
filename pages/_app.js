import GlobalContainer from '../layouts/GlobalContainer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContainer>
      <Component {...pageProps} />
    </GlobalContainer>
  );
}

export default MyApp;
