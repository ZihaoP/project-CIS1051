import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import firestore from '@react-native-firebase/firestore';

const AddTask = (props) => {
  const [taskText, setTaskText] = useState('I need to...');

  const clearOrEditText = () => {
    if (taskText === 'I need to...') {
      setTaskText('');
    }
  };

  const saveOrResetText = () => {
    if (taskText === '') {
      setTaskText('I need to...');
    }
  };

  const addTask = () => {
    firestore()
      .collection('tasks')
      .add({
        uid: props.User.uid,
        task: taskText,
        date: firestore.FieldValue.serverTimestamp(),
        completed: false,
      })
      .then(() => {
        console.log('Task added!');
        setTaskText('I need to…');
      });
  };
  

  return (
    <KeyboardAvoidingView behavior="height">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.textEntryContainer}>
            <TextInput style={styles.textEntryElement} value={taskText} onChangeText={text => setTaskText(text)} onFocus={() => clearOrEditText()} onBlur={() => saveOrResetText()} multiline={true} onSubmitEditing={() => addTask()} />
            <TouchableOpacity style={styles.addIcon} onPress={() => addTask()}>
              <Icon name="add-circle" color={((taskText === '' || taskText === 'I need to...')) ? '#8B8B8B' : '#004777'} size={24} style={styles.addIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 3,
    borderTopColor: '#EEEEEE',
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  textEntryContainer: {
    minHeight: 44,
    maxHeight: 150,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    width: '100%',
  },
  textEntryElement: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#595959',
    marginLeft: 6,
    flexShrink: 1,
    width: '100%',
    marginRight: 12,
  },
  addIcon: {
    alignSelf: 'flex-end',
    marginBottom: 6,
  },
});

export default AddTask;
