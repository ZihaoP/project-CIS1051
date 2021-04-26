import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RegistrationSuccess = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../images/DarkBlueGradient.png')} style={styles.bgImage} resizeMode='contain' />
      <Image source={require('./images/SuccessImage.png')} />
      <Text style={styles.headerText}>
        Success!
      </Text>
      <Text style={styles.regularText}>
        Your account has been created. Welcome to EasyToDo!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => props.switchScreen('tasks')}>
        <Text style={styles.buttonText}>
          Go to tasklist
        </Text>
        <Icon name="chevron-right" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
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
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontFamily: 'Roboto-Black',
    fontSize: 24,
    color: '#004777',
    marginTop: 12,
    marginBottom: 6,
  },
  regularText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#595959',
  },
  button: {
    maxHeight: 48,
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004777',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  buttonText: {
    fontFamily: 'Roboto-Black',
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default RegistrationSuccess;
