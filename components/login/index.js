import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = (props) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [secured, setSecured] = useState(true);
  const [usernameActive, setUsernameActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={require('../../images/DarkBlueGradient.png')} style={styles.bgImage} resizeMode={'cover'} />
        <Text style={styles.headerText}>EasyToDos</Text>
        <Image source={require('../../images/ToDoImage.png')} style={styles.welcomeImage} />
        <Text style={styles.regularText}>Login or <Text style={styles.clickableText} onPress={() => props.switchScreen('register')}>create an account</Text> to get started</Text>
        <View style={styles.inputField}>
          <Text style={styles.textInputLabel}>
            Email Address
          </Text>
          <View style={{...styles.textInputContainer, borderBottomColor: usernameActive ? "#FF7700" : "#00AFB5"}}>
            <TextInput style={styles.textInput} onChangeText={text => setEmailAddress(text)} value={emailAddress} onFocus={() => setUsernameActive(true)} onBlur={() => setUsernameActive(false)}/>
          </View>
        </View>
        <View style={styles.inputField}>
          <Text style={styles.textInputLabel}>
            Password
          </Text>
          <View style={{...styles.textInputContainer, borderBottomColor: passwordActive ? "#FF7700" : "#00AFB5"}}>
            <TextInput style={styles.textInput} secureTextEntry={secured} onChangeText={text => setPassword(text)} value={password} onFocus={() => setPasswordActive(true)} onBlur={() => setPasswordActive(false)}/>
            <TouchableOpacity style={styles.visibilityButton} onPress={() => setSecured(!secured)}>
              <Icon name={secured ? "visibility" : "visibility-off"} size={24} color="#00AFB5" />
            </TouchableOpacity>
          </View>
        </View>
        {(emailAddress.length > 0 && password.length > 0) ? (
          <TouchableOpacity style={styles.buttonEnabled} onPress={() => props.doLogin(emailAddress, password)}>
            <Text style={styles.buttonText}>
              Login
            </Text>
            <Icon name="chevron-right" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        ) : (
          <View style={styles.buttonDisabled}>
            <Text style={styles.buttonText}>
              Login
            </Text>
            <Icon name="chevron-right" size={24} color="#FFFFFF" />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headerText: {
    fontFamily: "Roboto-Black",
    color: '#004777',
    fontSize: 24,
    textAlign: 'center',
  },
  regularText: {
    fontFamily: "Roboto",
    color: '#595959',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
  },
  welcomeImage: {
    marginVertical: 12,
  },
  inputField: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 24,
    paddingHorizontal: 12,
    width: '100%',
  },
  textInputLabel: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#004777',
  },
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderRadius: 4,
    borderTopWidth: 3,
    borderTopColor: '#D9EEF1',
    backgroundColor: '#D9EEF1',
    width: '100%',
  },
  textInput: {
    backgroundColor: '#D9EEF1',
    paddingHorizontal: 12,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#000000',
    flexGrow: 1,
  },
  visibilityButton: {
    marginHorizontal: 12,
    alignSelf: 'center',
  },
  clickableText: {
    fontFamily: 'Roboto-Black',
    fontSize: 14,
    textAlign: 'center',
    color: '#004777',
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
  buttonDisabled: {
    marginTop: 24,
    marginRight: 12,
    maxHeight: 48,
    borderRadius: 24,
    backgroundColor: '#8B8B8B',
    paddingVertical: 16,
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  buttonEnabled: {
    marginTop: 24,
    marginRight: 12,
    maxHeight: 48,
    borderRadius: 24,
    backgroundColor: '#004777',
    paddingVertical: 16,
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontFamily: 'Roboto-Black',
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default Login;
