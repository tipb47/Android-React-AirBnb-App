import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (email: string) => {
    // Simple email validation, you may want to use a more sophisticated check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  
    
  };

  const handleContinue = () => {

    // Check if the email is in a valid format
    if (!isEmailValid(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
  
    //valid email, go signup.
    navigation.navigate("Signup", {email: email});

  };

  

  const handleLoginMethod = (method: string) => {
    console.log(`Continue with ${method} (useless)`);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.loginMethodsContainer}>
        <TouchableOpacity style={styles.loginMethodButton} onPress={() => handleLoginMethod('Phone')}>
          <Text style={styles.loginMethodButtonText}>Continue with Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginMethodButton} onPress={() => handleLoginMethod('Apple')}>
          <Text style={styles.loginMethodButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginMethodButton} onPress={() => handleLoginMethod('Google')}>
          <Text style={styles.loginMethodButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginMethodButton} onPress={() => handleLoginMethod('Facebook')}>
          <Text style={styles.loginMethodButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 50,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  continueButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginMethodButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  loginMethodButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginMethodsContainer: {
    marginTop: 20,
    width: '100%',
  },
});
