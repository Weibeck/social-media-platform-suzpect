import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = (props) => (
  <View style={styles.headerContainer}>
    <View style={styles.leftContainer}>
      <Icon name='add' type='material' color="#1A1A1B" onPress={props.onPressNewPost} />
      <Text style={styles.greetingText}>New Post</Text>
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.greetingText}>My Posts</Text>
      <Icon name='format-list-bulleted' type='material' color="#1A1A1B" onPress={() => console.log("My Posts")} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },

  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#1A1A1B", 
    paddingHorizontal: 10, 
  },
});

export default Header;
