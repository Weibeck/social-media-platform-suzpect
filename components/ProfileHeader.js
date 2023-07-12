import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ProfileHeader = ({ username, handle, stats, bio, avatarUri }) => {
    return (
      <View style={styles.profileHeader}>
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: avatarUri }} style={styles.avatarContainer} />
        </View>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.handle}>{handle}</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.stats}>{stats}</Text>
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    profileHeader: {
      alignItems: "center",
    },
    avatarWrapper: {
      width: "100%",
      alignSelf: "center",
      marginTop: 40,
      borderBottomWidth: 1,
      borderBottomColor: "#EAEAEA", 
    },
    avatarContainer: {
      width: "100%",
      height: 350,
      overflow: "hidden",
    },
    username: {
      fontSize: 24,
      color: "#1A1A1B", 
      fontWeight: "bold",
      marginTop: 10,
    },
    handle: {
      fontSize: 18,
      color: "#878A8C", 
      fontWeight: "200",
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#EAEAEA", 
    },
    statsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center", 
      marginBottom: 10,
      width: "90%",
      borderBottomWidth: 1,
      borderBottomColor: "#EAEAEA",
    },
    stats: {
      fontSize: 18,
      color: "#1A1A1B", 
    },
    bioContainer: {
      padding: 5,
      width: "90%",
      borderBottomWidth: 1,
      borderBottomColor: "#EAEAEA", 
    },
    bio: {
      fontSize: 16,
      color: "#1A1A1B", 
      textAlign: "center",
    },
  });
  
  

export default ProfileHeader;
