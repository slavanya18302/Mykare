import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"

import UserContext from "./src/shared/userContext";
import AuthStack from "./src/stack/authStack";
import AppStack from "./src/stack/appStack";

function App() {

  const [logIn, setLogIn] = useState(false)

  const checkIn = async () => {
    const asyncLogIn = await AsyncStorage.getItem("userID")
    if (asyncLogIn) {
      setLogIn(true)
    }
  }

  useEffect(() => {
    checkIn()
  }, []);

  return (
    <UserContext.Provider value={{ isLogedIn: logIn, setIsLogedIn: setLogIn }}>
      <NavigationContainer>
        {logIn ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
