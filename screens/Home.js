import { View, StyleSheet, FlatList } from "react-native";
import React, { useState } from 'react';
import Post from "../components/Post";
import Header from "../components/Header";
import NewPostModal from "../components/PostModal";
import { trendingPosts } from "../data/mockdata";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleToggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Header onPressNewPost={handleToggleModal} modalVisible={modalVisible} />
      <View style={styles.contentContainer}>
        <FlatList
          data={trendingPosts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => <Post post={item} />}
        />
      </View>
      <NewPostModal visible={modalVisible} onClose={handleToggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#FFFFFF", 
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "#EAEAEA", 
    width: "100%",
    marginVertical: 10,
  },
});

export default HomeScreen;
