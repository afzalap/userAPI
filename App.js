
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Button, NativeBaseProvider, Spinner } from 'native-base';
import User from "./components/User"


const App = () => {

  const axios = require('axios').default;


  const [details, setDetails] = useState(null)
  const fetchDetails = async () => {
    try {

      const { data } = await axios.get('https://randomuser.me/api/')
      const details = data.results[0]
      // console.log(details)

      setDetails(details)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  if (!details) {
    return (
      <NativeBaseProvider style={styles.container}>
        <View style={styles.container}>
          <Spinner />
        </View>
      </NativeBaseProvider>
    )
  }
  else {
    return (
      <>
        <StatusBar backgroundColor="#222831"  />
        <NativeBaseProvider>
          <View style={styles.container}>
            <User details={details} />
            <Button style={styles.button}
              onPress={() => fetchDetails()}
            >
              <Text>
                New User
              </Text>
            </Button>
          </View>
        </NativeBaseProvider>
      </>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222831"
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
  }
})
