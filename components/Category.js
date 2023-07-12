import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Category = ({ category }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default Category;
