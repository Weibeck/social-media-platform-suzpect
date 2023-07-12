import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import { profileposts, mockImages } from "../data/mockdata";
import Post from "../components/Post";

const ImageItem = ({ uri }) => (
  <Image
    source={{ uri }}
    style={styles.galleryImage}
  />
);

const ProfileScreen = () => {
  const renderHeader = () => (
    <View>
      <ProfileHeader
        username="John A."
        handle="@johnanon13"
        stats="145 Post · 15k Followers"
        bio="Avid reader, fitness enthusiast, and passionate traveler. On a never-ending quest for knowledge, self-improvement, and the perfect cup of coffee."
        avatarUri="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWgel=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
      <FlatList
        data={mockImages}
        style={styles.seperator}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ImageItem uri={item} />}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={profileposts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF", 
    paddingTop: 0,
  },
  galleryImage: {
    width: Dimensions.get("window").width * 0.43,
    height: 125,
    margin: 15,
    borderRadius: 10,
  },
  seperator: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
});

export default ProfileScreen;
