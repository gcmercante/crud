import { BrowserRouter, Route } from 'react-router-dom';

import { SearchContextProvider } from './contexts/SearchContext';
import { DeleteContextProvider } from './contexts/DeleteContext';
import { ModalContextProvider } from './contexts/ModalContext';
import { AlertContextProvider } from './contexts/AlertContext';
import { FormContextProvider } from './contexts/FormContext';
import CreateDev from './pages/CreateDev';
import EditDev from './pages/EditDev';
import Developer from './pages/Developer';

import './services/icons';

function App() {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <AlertContextProvider>
          <FormContextProvider>
            <SearchContextProvider>
              <DeleteContextProvider>
                <Route path="/" exact component={Developer} />
              </DeleteContextProvider>
            </SearchContextProvider>
            <Route path="/developers/create" exact component={CreateDev} />
            <Route path="/developers/edit/:id" exact component={EditDev} />
          </FormContextProvider>
        </AlertContextProvider>
      </ModalContextProvider>
    </BrowserRouter>
  );
}

export default App;
