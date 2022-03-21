import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';
import "./index.css"
import { RepositoryContextProvider } from './contexts/RepositoryContext';
ReactDOM.render(

  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <RepositoryContextProvider>
    <App />
    </RepositoryContextProvider>
    </QueryClientProvider>
  </BrowserRouter>,

  document.getElementById('root')
)
