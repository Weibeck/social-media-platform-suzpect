import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { notifications } from '../data/mockdata';

function NotificationItem({ notification }) {
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{notification.content}</ListItem.Title>
        <ListItem.Subtitle>{notification.time}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

function NotificationScreen() {
  const handleMarkAllAsRead = () => {
    console.log("Mark all as read");
  };

  const handleSettingsPress = () => {
    console.log("Settings");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='done-all' type='material' color="#1A1A1B" onPress={handleMarkAllAsRead} />
        <Text style={styles.headerTitle}>Notifications</Text>
        <Icon name='settings' type='material' color="#1A1A1B" onPress={handleSettingsPress} />
      </View>
      <FlatList 
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <NotificationItem notification={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    paddingTop: 30, 
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 24,
    color: "#1A1A1B",
    alignSelf: "center", 
    marginTop: 10, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 15,
    marginTop: 10, 
    marginHorizontal: 10,
  },
});


export default NotificationScreen;
