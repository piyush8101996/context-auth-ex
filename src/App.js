import './App.css';
import Header from './components/Header/Header';
import AuthContextProvider from './context/AuthContext';
import UserContextProvider from './context/UserContext';
import PageRoute from './route/PageRoute';

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <div className="App">
          <Header />
          <PageRoute />
        </div>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default App;
