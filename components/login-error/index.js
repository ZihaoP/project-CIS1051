import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginError = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require('./images/ErrorGradient.png')} style={styles.bgImage} resizeMode={'cover'} />
      <Text style={styles.headerText}>
        {"Something's not quite right"}
      </Text>
      <Image source={require('./images/LoginError.png')} style={styles.errorImage} />
      <Text style={styles.regularText}>
        {props.ErrorMessage}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => props.dismissError()}>
        <Text style={styles.buttonText}>
          Try Again
        </Text>
        <Icon name="refresh" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Roboto-Black',
    fontSize: 24,
    color: '#A30000',
  },
  regularText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#595959',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  errorImage: {
    marginVertical: 12,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 48,
    backgroundColor: '#004777',
    maxHeight: 48,
    borderRadius: 24,
  },
  buttonText: {
    fontFamily: 'Roboto-Black',
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default LoginError;
