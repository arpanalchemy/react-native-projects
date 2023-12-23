import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteUrl: string) {
    Linking.openURL(websiteUrl);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingContainerText}>What's new node JS 21</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/07/27/15/56/link-1545625_1280.jpg',
          }}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={5} style={styles.cardDescription}>
            Hand holding virtual cloud computing with Global Internet
            connection. Business global internet connection application
            technology and access information, database, storage, Digital link
            tech, big data. Hand holding virtual cloud computing with Global
            Internet connection. Business global internet connection application
            technology and access information, database, storage, Digital link
            tech, big data.Hand holding virtual cloud computing with Global
            Internet connection. Business global internet connection application
            technology and access information, database, storage, Digital link
            tech, big data.Hand holding virtual cloud computing with Global
            Internet connection. Business global internet connection application
            technology and access information, database, storage, Digital link
            tech, big data.
          </Text>
          <View style={styles.cardFooter}>
            <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
              <Text style={styles.footerBtnLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.footerBtnLinks}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    height: 370,
    width: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainerText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'black',
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: 'black',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#2B2B52',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
    marginTop: 6,
  },
  cardFooter: {
    color: 'black',
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footerBtnLinks: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: 'white',
    backgroundColor: 'black',
    paddingVertical: 6,
    borderRadius: 8,
  },
});
