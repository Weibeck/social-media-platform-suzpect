import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Input, ListItem, Avatar } from 'react-native-elements';
import Topic from '../components/Topic';
import { people, topics } from '../data/mockdata';

const Person = ({ person }) => (
  <ListItem key={person.id} bottomDivider>
    <Avatar source={{ uri: person.avatar }} />
    <ListItem.Content>
      <ListItem.Title>{person.name}</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
);

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Explore More</Text> 
      <Input placeholder='Search...' leftIcon={{ type: 'font-awesome', name: 'search' }} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>People you might know</Text>
        {people.map(person => <Person key={person.id} person={person} />)}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Topics to explore</Text>
        <FlatList
          data={topics}
          renderItem={({ item }) => <Topic topic={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF", 
    paddingTop: 60,
    paddingHorizontal: 10,
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    color: "#1A1A1B", 
    alignSelf: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: "#1A1A1B",
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 5,
  },
});

export default ExploreScreen;
