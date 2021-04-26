import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EmptyTaskList = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./images/EmptyState.png')} />
      <Text style={styles.headerText}>
        {"You don't have anything to do"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'Roboto-Black',
    fontSize: 24,
    textAlign: 'center',
    color: '#004777',
    marginTop: 12,
  },
});

export default EmptyTaskList;
