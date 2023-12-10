import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Alert, Image, } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { auth, db } from "../auth/firebaseConfig";
import { onValue, ref } from "firebase/database";

export default function Trips() {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        const userId = user.uid;
        const reservationsRef = ref(db, `reservations/${userId}`);

        // Listen for changes in reservations
        onValue(reservationsRef, (snapshot) => {
          const reservationsData = snapshot.val();
          if (reservationsData) {
            const reservationsList = Object.values(reservationsData);
            const reservationValuesArray = reservationsList.map(
              (reservation) => reservation.reservation
            );
            setReservations(reservationValuesArray);
          } else {
            setReservations([]); // Set an empty array if there are no reservations
          }
        });
      } else {
        setReservations([]); // Set an empty array if the user is not signed in
      }
    } catch (error) {
      console.error('Error fetching reservations:', error);
      Alert.alert('Error', 'Failed to fetch reservations');
    }
  };

  // Use useFocusEffect instead of useEffect
  useFocusEffect(
    React.useCallback(() => {
      fetchReservations();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Upcoming reservations</Text>
      <ScrollView>
        {auth.currentUser ? (
          reservations.map((reservation, index) => (
            <View key={index}>
              {reservation === '1' && <Explore1 />}
              {reservation === '2' && <Explore2 />}
              {reservation === '3' && <Explore3 />}
              {/* Add more conditions if needed for other reservation values */}
            </View>
          ))
        ) : (
          <Text style={styles.title}>Not signed in</Text>
        )}
        {reservations.length === 0 && auth.currentUser && (
          <Text style={styles.title}>No upcoming reservations</Text>
        )}
      </ScrollView>
    </View>
  );
}





function Explore1() {
  return(
    <View style={styles.card}>
    <Text style={styles.reservationText}>In 3 days</Text>
    <Image source={require('../assets/room1.jpg')} style={styles.image} />
    <Text style={styles.reservationTextBottom}>Room with large balcony view</Text>
  </View>
  );
}

function Explore2() {
  return(
    <View style={styles.card}>
      <Text style={styles.reservationText}>In 4 days</Text>
      <Image source={require('../assets/room2.jpg')} style={styles.image} />
      <Text style={styles.reservationTextBottom}>Cozy room with large flatscreen TV</Text>
    </View>
  );
}

function Explore3() {
  return(
    <View style={styles.card}>
      <Text style={styles.reservationText}>In 2 days</Text>
      <Image source={require('../assets/room3.png')} style={styles.image} />
      <Text style={styles.reservationTextBottom}>Cabin in the middle of the woods</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
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
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center'
  },
  subtitle: {
    fontSize: 25,
    textAlign: 'left',
    marginLeft: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  reservationContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  reservationText: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  reservationTextBottom: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold'
  }
});