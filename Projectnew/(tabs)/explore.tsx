import React from 'react';
import { StyleSheet, Button, View, TextInput, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Explore() {
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Where to?"
          placeholderTextColor="#A0A0A0"
        />
        <Ionicons name="settings-outline" size={24} color="#000" style={styles.settingsIcon} />
      </View>

      <View style={styles.iconRow}>
        <Ionicons name="business-outline" size={24} color="#000" style={styles.icon} />
        <Ionicons name="trending-up-outline" size={24} color="#000" style={styles.icon} />
        <Ionicons name="play-outline" size={24} color="#000" style={styles.icon} />
        <Ionicons name="location-outline" size={24} color="#000" style={styles.icon} />
        <Ionicons name="umbrella-outline" size={24} color="#000" style={styles.icon} />
      </View>

      <ScrollView style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Explore1')}>
          <View style={styles.card}>
            <Image
              source={require('../assets/room1.jpg')}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>Room with large balcony view</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={18} color="#000000" style={styles.starIcon} />
                <Text style={styles.ratingText}>4.98</Text>
              </View>
            </View>
            <Text style={styles.cardText2}>Private Room</Text>
            <Text style={styles.cardText3}>$90 / night</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Explore2')}>
          <View style={styles.card}>
            <Image
              source={require('../assets/room2.jpg')}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>Cozy room with large flatscreen TV</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={18} color="#000000" style={styles.starIcon} />
                <Text style={styles.ratingText}>3.2</Text>
              </View>
            </View>
            <Text style={styles.cardText2}>Connected to household</Text>
            <Text style={styles.cardText3}>$50 / night</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Explore3')}>
          <View style={styles.card}>
            <Image
              source={require('../assets/room3.png')}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>Cabin in the middle of the woods</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={18} color="#000000" style={styles.starIcon} />
                <Text style={styles.ratingText}>1.4</Text>
              </View>
            </View>
            <Text style={styles.cardText2}>Private Cabin</Text>
            <Text style={styles.cardText3}>$100 / night</Text>
          </View>
        </TouchableOpacity>

          {/* added another item to the scrollview to ensure the 3rd wasnt cut off by tab bar */}
          <View style={styles.card}>
            <Image
              source={require('../assets/favicon.png')}
              style={styles.cardImagePlaceholder}
            />
          </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginTop: 40,
    marginEnd: 10
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingsIcon: {
    marginLeft: 10,
  },
  icon: {
    flex: 1,
    textAlign: 'center',
  },
  cardContainer: {
  },
  card: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 350,
    borderRadius: 8,
    marginBottom: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText2: {
    fontSize: 16,
  },
  cardText3: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 3
  },
  starIcon: {
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  cardImagePlaceholder: {
    width: '100%',
    height: 105,
    borderRadius: 8,
    marginBottom: 3,
  },
});
