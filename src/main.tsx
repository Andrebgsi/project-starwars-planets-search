import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import StarWarsProvider from './context/StarWarsProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StarWarsProvider>
    <App />
  </StarWarsProvider>,
);
