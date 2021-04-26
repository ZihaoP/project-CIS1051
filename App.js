/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal
} from 'react-native';


import Login from './components/login';
import LoginError from './components/login-error';
import Registration from './components/registration';
import RegistrationSuccess from './components/registration-success';
import Tasks from './components/tasks';

import auth from '@react-native-firebase/auth';

const App: () => React$Node = () => {
  //set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessageText, setErrorMessageText] = useState('');
  const [currentScreen, setCurrentScreen] = useState('login');

  const doRegister = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        switchScreen('registration-success');
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          setErrorMessageText('An account already Exists with that email address. Why not try logging in instead?');
          setErrorModalVisible(true);
        } else if (error.code === 'auth/invalid-email') {
          setErrorMessageText('The email address you entered is invalid. Make sure it’s formatted correctly. For example, me@myemail.com');
          setErrorModalVisible(true);
        }
      });
  };
  
  const doLogin = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        setErrorMessageText('We couldn’t log you in. Either we couldn’t find an account with that email address or the password you entered was incorrect.');
        setErrorModalVisible(true);
      });
  };
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  
  const onAuthStateChanged = user => {
    setUser(user);
    if ((user) && (currentScreen === 'login')) {
      setCurrentScreen('tasks');
    }
    if (initializing) {
      setInitializing(false);
    }
  };

  const logoutUser = () => {
    auth()
      .signOut()
      .then(() => setCurrentScreen('login'));
  };

  const hideError = () => {
    setErrorModalVisible(false);
  };

  const switchScreen = screen => {
    setCurrentScreen(screen);
  };

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Modal animationType='slide' transparent={true} visible={errorModalVisible} onRequestClose={() => hideError()}>
            <LoginError dismissError={hideError} ErrorMessage={errorMessageText} />
          </Modal>
          {currentScreen === 'login' ? <Login doLogin={doLogin} switchScreen={switchScreen} /> : null}
          {currentScreen === 'register' ? <Registration switchScreen={switchScreen} doRegister={doRegister} /> : null}
        </SafeAreaView>
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        {currentScreen === 'registration-success' ? <RegistrationSuccess switchScreen={switchScreen} /> : null}
        {currentScreen === 'tasks' ? <Tasks logoutUser={logoutUser} User={user} /> : null}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
