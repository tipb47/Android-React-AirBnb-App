import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebaseConfig";  

export default function SignedIn() {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSignOut = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (error) { 
      console.error("Error signing out: ", error);
    }
  };

  const userEmail = auth.currentUser?.email || "No email available";
  
  const onSaveName = async () => {
    Alert.alert("Name updated.", "Your name has been saved.");
  };
  


    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile</Text>
          <TouchableOpacity onPress={() => console.log('Bell icon pressed')}>
            <Ionicons name="notifications-outline" size={25} color={'black'} />
          </TouchableOpacity>
        </View>
  
        {/* Card with circular image */}
        <View style={styles.cardContainer}>
          <Image source={require('../assets/favicon.png')} style={styles.circularImage} />
        </View>
  
        {/* Inputs and Checkmark button */}
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        />
                <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />
        <TouchableOpacity style={styles.checkmarkButton} onPress={onSaveName}>
          <Text>✓</Text>
        </TouchableOpacity>
      </View>
  
        {/* Email -- REPLACE W/ FIREBASE*/}
        <Text style={styles.emailText}>{userEmail}</Text> 
  
        {/* Date since  -- static, doesnt matter*/}
        <Text style={styles.dateText}>Since 12/9/2023</Text>
  
        {/* Sign Out button */}
        <TouchableOpacity style={styles.signOutButton} onPress={() => onSignOut()}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      marginBottom: 200
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 200,
    },
    headerText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    bellIcon: {
      width: 20,
      height: 20,
    },
    cardContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    circularImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    inputContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      marginRight: 10,
      borderWidth: 1,
      padding: 10,
    },
    checkmarkButton: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5,
    },
    emailText: {
      marginBottom: 10,
    },
    dateText: {
      marginBottom: 10,
    },
    signOutButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
  });