import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadScreen:{screen:ReadStoryScreen},
  WriteScreen:{screen:WriteStoryScreen}
},

{defaultNavigationOptions : ({navigation})=>({
  tabBarIcon : ()=>{
    const routeName = navigation.state.routeName;

    if(routeName === "ReadScreen"){
      return(
        <Image
          style = {{width:40, height:40}}
          source = {require("./assets/read.png")}
        />
      );
    } else if(routeName === "WriteScreen"){
      return(
        <Image
          style = {{width:40, height:40}}
          source = {require("./assets/write.png")}
        />
      );
    }
  }
})}
);

const AppContainer = createAppContainer(TabNavigator);
