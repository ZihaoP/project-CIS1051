import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Registration = (props) => {
  const [passwordSecured, setPasswordSecured] = useState(true);
  const [confirmPasswordSecured, setConfirmPasswordSecured] = useState(true);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailAddressActive, setEmailAddressActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [confirmPasswordActive, setConfirmPasswordActive] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={require('../../images/DarkBlueGradient.png')} style={styles.bgImage} resizeMode='cover' />
        <Text style={styles.headerText}>
          {"Sign up for your free EasyToDo account"}
        </Text>
        <Text style={styles.regularText}>
          {"EasyToDo is a free cloud-based to do list/task tracker designed with simplicity in mind. Complete the form below to create your account."}
        </Text>
        <View style={styles.inputField}>
          <Text style={styles.textInputLabel}>
            Email Address
          </Text>
          <View style={{...styles.textInputContainer, borderBottomColor: emailAddressActive ? "#FF7700" : "#00AFB5"}}>
            <TextInput style={styles.textInput} onChangeText={text => setEmailAddress(text)} value={emailAddress} onFocus={() => setEmailAddressActive(true)} onBlur={() => setEmailAddressActive(false)} />
          </View>
        </View>

        <View style={styles.inputField}>
          <Text style={styles.textInputLabel}>
            Password
          </Text>
          <View style={{...styles.textInputContainer, borderBottomColor: passwordActive ? "#FF7700" : "#00AFB5"}}>
            <TextInput style={styles.textInput} secureTextEntry={passwordSecured} onChangeText={text => setPassword(text)} value={password} onFocus={() => setPasswordActive(true)} onBlur={() => setPasswordActive(false)} />
            <TouchableOpacity style={styles.visibilityButton} onPress={() => setPasswordSecured(!passwordSecured)}>
              <Icon name={passwordSecured ? "visibility" : "visibility-off"} size={24} color="#00AFB5" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputField}>
          <Text style={styles.textInputLabel}>
            Confirm Password
          </Text>
          <View style={{...styles.textInputContainer, borderBottomColor: confirmPasswordActive ? "#FF7700" : "#00AFB5"}}>
            <TextInput style={styles.textInput} secureTextEntry={confirmPasswordSecured} onChangeText={text => setConfirmPassword(text)} value={confirmPassword} onFocus={() => setConfirmPasswordActive(true)} onBlur={() => setConfirmPasswordActive(false)} />
            <TouchableOpacity style={styles.visibilityButton} onPress={() => setConfirmPasswordSecured(!confirmPasswordSecured)}>
              <Icon name={confirmPasswordSecured ? "visibility" : "visibility-off"} size={24} color="#00AFB5" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.actionRow}>
          <Text style={styles.clickableText} onPress={() => props.switchScreen('login')}>
            {"Already have an account?"}
          </Text>
          {(emailAddress.length > 0 && password.length > 0 && confirmPassword.length > 0 && (password === confirmPassword)) ? (
            <TouchableOpacity style={styles.buttonEnabled} onPress={() => props.doRegister(emailAddress, password)}>
              <Text style={styles.buttonText}>
                Register
              </Text>
              <Icon name="chevron-right" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonDisabled}>
              <Text style={styles.buttonText}>
                Register
              </Text>
              <Icon name="chevron-right" size={24} color="#FFFFFF" />
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    height: '100%',
  },
  headerText: {
    fontFamily: 'Roboto-Black',
    fontSize: 24,
    color: '#004777',
    textAlign: 'center',
  },
  regularText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#595959',
    textAlign: 'center',
    marginTop: 6,
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
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
    marginTop: 24,
    marginLeft: 12,
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
  actionRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

export default Registration;
