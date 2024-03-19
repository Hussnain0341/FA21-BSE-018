import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask('');
  };

  const handleDeleteTask = id => {
    setTasks(tasks.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
      <Text style={styles.task}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={text => setTask(text)}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  task: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TodoApp;