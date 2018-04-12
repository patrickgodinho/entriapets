import React from 'react';
import {StyleSheet, Text, View, AsyncStorage, ActivityIndicator} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';

import PetList from "./src/components/PetList";
import Login from "./src/components/Login";

const AppStack = StackNavigator({ Home: PetList });
const AuthStack = StackNavigator({ Login: Login});

class EntriaPets extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {

    return(
      <View>
        <ActivityIndicator/>
      </View>
    )
  }
}

export default SwitchNavigator(
  {
    EntriaPets: EntriaPets,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'EntriaPets',
  }
);



