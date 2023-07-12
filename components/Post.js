import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Icon } from "react-native-elements";

const Post = ({ post }) => {
    return (
        <View style={styles.trendingContainer}>
            <View style={styles.postHeader}>
                <Avatar
                    size="small"
                    rounded
                    source={{ uri: post.profilePicture }}
                    containerStyle={styles.avatarContainer}
                />
                <Text style={styles.postUsername}>{post.user}</Text>
                <Text style={styles.postTimestamp}>{post.time} ago</Text>
            </View>
            {post.image ? (
                <Image source={{ uri: post.image }} style={styles.postImage} />
            ) : (
                <Text style={styles.postContent}>{post.text}</Text>
            )}
            <View style={styles.reactionsContainer}>
                <TouchableOpacity style={styles.reaction}>
                    <Icon name="thumb-up" size={20} color="#1A1A1B" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reaction}>
                    <Icon name="comment" size={20} color="#1A1A1B" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reaction}>
                    <Icon name="share" size={20} color="#1A1A1B" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  trendingContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    width: "90%", 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignSelf: "center",
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  avatarContainer: {
    borderWidth: 2, 
    borderColor: "#EAEAEA", 
    marginRight: 10,
  },
  postUsername: {
    marginLeft: 10,
    color: "#1A1A1B", 
    fontWeight: 'bold'
  },
  postTimestamp: {  
    fontSize: 14,
    color: "#888",
    marginLeft: 'auto',
  },
  postImage: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  postContent: {
    fontSize: 16,
    color: '#1A1A1B', 
    marginBottom: 20
  },
  reactionsContainer: {
    flexDirection: 'row'
  },
  reaction: {
    marginHorizontal: 10
  }
});


export default Post;
