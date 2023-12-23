import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Data</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://media.istockphoto.com/id/1685384958/photo/hand-holding-virtual-cloud-computing-with-global-internet-connection-business-global-internet.jpg?s=1024x1024&w=is&k=20&c=EKaXPbEc_ogZ56jryIwBRFmAkK7-rfGdxt8d4wwcQJU=',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>iStock</Text>
          <Text style={styles.cardLabel}>Credit Data</Text>
          <Text style={styles.cardDescription}>
            Hand holding virtual cloud computing with Global Internet
            connection. Business global internet connection application
            technology and access information, database, storage, Digital link
            tech, big data.
          </Text>
          <Text style={styles.cardFooter}>Arpan Kayastha</Text>
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
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
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
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
});
