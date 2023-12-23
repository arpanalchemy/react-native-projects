import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Arpan Kayastha',
      status: 'available',
      image: 'https://avatars.githubusercontent.com/u/59161075?v=4',
    },
    {
      uid: 2,
      name: 'Jhon Doe',
      status: 'offline',
      image:
        'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?size=626&ext=jpg&ga=GA1.1.24917711.1702355262&semt=sph',
    },
    {
      uid: 3,
      name: 'Ryan J. Abreu',
      status: 'out of service',
      image:
        'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.1.24917711.1702355262&semt=sph',
    },
    {
      uid: 4,
      name: 'Jordyn Wood',
      status: 'missing',
      image:
        'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.24917711.1702355262&semt=sph',
    },
    {
      uid: 5,
      name: 'Declan Reed',
      status: 'away',
      image:
        'https://www.random-name-generator.com/images/faces/male-white/47.jpg?ezimgfmt=rs:148x143/rscb1/ng:webp/ngcb1',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, image}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              style={styles.userImage}
              source={{
                uri: image,
              }}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF0F1',
    marginTop: 16,
    padding: 4,
    borderRadius: 8,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    color: '#2B2B52',
  },
  userStatus: {
    fontSize: 14,
    color: 'gray',
  },
});
