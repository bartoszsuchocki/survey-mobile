import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import Navigation from './components/Navigation';
import { UserContext } from './utils/userContextHelper';
import { AsyncStorage } from 'react-native';

console.disableYellowBox = true;

export default function App() {
  const [user, setUser] = useState({});
  
  useEffect(() => {
      const loadUser = async () => {
          const userObj = await AsyncStorage.getItem("userData") || {};
          setUser(userObj);
      }
      loadUser();
  }, []);

  const { Provider } = UserContext;
  
  return (
      <Provider value={{
          user, 
          onLogin: (loggedUser) => {setUser(loggedUser)}
      }}>
          <Navigation />
      </Provider>
  );
}