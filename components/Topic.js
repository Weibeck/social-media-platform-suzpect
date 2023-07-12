import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Topic = ({ topic }) => (
    <View style={styles.container}>
      <Image source={{ uri: topic.image }} style={styles.image} />
      <Text style={styles.title}>{topic.title}</Text>
    </View>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 100,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 16,
      marginTop: 5,
      textAlign: 'center',
    },
  });
  

export default Topic;
