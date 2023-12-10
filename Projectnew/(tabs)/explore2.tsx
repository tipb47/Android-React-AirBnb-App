import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth, db } from "../auth/firebaseConfig";  
import { onValue, ref, push } from "firebase/database";


const Explore2Screen = () => {

  function onReserve() {
    if (auth.currentUser) {

      const userId = auth.currentUser.uid;

      const reservationsRef = ref(db, `reservations/${userId}`);
      const newReservationRef = push(reservationsRef, {
        reservation: "2"
      });

      Alert.alert("Placed reservation!")
    } else {
      Alert.alert("Not signed in", "Sign in before you place any reservations!")
    }
  }

  return (
    
      <View style={styles.container}>
        <Image source={require('../assets/room2.jpg')} style={styles.image} />
        <Text style={styles.largeText}>Cozy room with large flatscreen TV</Text>
        <Text style={styles.smallText}>Private Room in Ann Arbor, Michigan</Text>
        <Text style={styles.houseInfoText}>2 guests - 1 bedrooms - 1 bed - 1 bathroom</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={18} color="#000000" style={styles.starIcon} />
          <Text style={styles.ratingText}>3.2 - 53 reviews</Text>
        </View>

        <View style={styles.hostContainer}>
          <View style={styles.hostImageContainer}>
            <Image source={require('../assets/favicon.png')} style={styles.hostImage} />
          </View>
          <View style={styles.hostInfoContainer}>
            <Text style={styles.hostText}>Hosted by Richard</Text>
            <Text style={styles.hostSinceText}>Host since 4/5/2021</Text>
          </View>
        </View>
        <Text style={styles.loremIpsum}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Amet nisl purus in mollis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Quis commodo odio aenean sed. Dolor magna eget est lorem ipsum dolor. Dolor magna sit.
        </Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.priceText}>$50 / night</Text>
          <TouchableOpacity style={styles.reserveButton} onPress={() => onReserve()}> 
            <Text style={styles.reserveButtonText}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignContent: 'center'
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  largeText: {
    fontSize: 24,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  smallText: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  houseInfoText: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
    color: 'grey'
  },
  ratingText: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  starIcon: {
    marginLeft: 10,
    marginTop: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  hostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
    marginLeft: 25
  },
  hostImageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 10,
  },
  hostImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  hostInfoContainer: {
    flex: 1,
  },
  hostText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hostSinceText: {
    fontSize: 16,
    color: 'grey',
  },
  loremIpsum: {
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: 10,
    textAlign: 'justify',
    color: 'grey',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reserveButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5, // Takes up 50% of the container
    marginRight: 5,
  },
  reserveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  },
});

export default Explore2Screen;