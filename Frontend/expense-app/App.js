import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './src/views/Login';
import OptionLogin from './src/views/OptionLogin';
import Expense from './src/views/Expense';
import Home from './src/views/Home';
import Account from './src/views/Account';

//File responsible for loading all the routes of the application as soon as the application is started and making them navigable, through react-navigation
const Routes = createAppContainer(
  createSwitchNavigator({
    OptionLogin,
    Login,
    Account,
    Home,
    Expense
  })
)

export default function App() {
  return <Routes />
}


