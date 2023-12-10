import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { setEnabled } from 'react-native/Libraries/Performance/Systrace';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, AuthProvider} from "firebase/auth";
import { auth } from "../auth/firebaseConfig";  


export default function Signup() {
  const navigation = useNavigation()

  const route = useRoute();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUpFields, setShowSignUpFields] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState('');

  useEffect(() => {
    // Access the email parameter from the route and update the state
    setEmail(route.params?.email || ''); // If route.params.email is undefined, set an empty string
  }, [route.params?.email]);

  const isEmailValid = (email: string) => {
    // Simple email validation, you may want to use a more sophisticated check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  

  const handleSignIn = async () => {
    if (!isEmailValid(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("SignedIn", {email: email});
    } catch (error: any) {
      console.log(error);
      Alert.alert("Login Failed: " + error.message);
    }
  };

  const handleSignUp = async () => {
    if (!isEmailValid(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (password !== verifyPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate("SignedIn");
    } catch (error: any) {
      console.log(error);
      alert("Registration failed: " + error.message);
    }
  };


  const handleBackToSignIn = () => {
    // Handle going back to the initial state
    setShowSignUpFields(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={email}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      {!showSignUpFields && (
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      )}
      {showSignUpFields && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TextInput
            style={styles.input}
            placeholder="Verify Password"
            secureTextEntry
            onChangeText={(text) => setVerifyPassword(text)}
            value={verifyPassword}
          />
        </>
      )}
      {!showSignUpFields ? (
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      )}
      {!showSignUpFields && (
        <TouchableOpacity style={styles.smallButton} onPress={() => setShowSignUpFields(true)}>
          <Text style={styles.smallButtonText}>Sign Up</Text>
        </TouchableOpacity>
      )}
      {showSignUpFields && (
        <TouchableOpacity style={styles.smallButton} onPress={handleBackToSignIn}>
          <Text style={styles.smallButtonText}>Back to Sign In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  signInButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: 'red', // Adjust the color as needed
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  smallButton: {
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  smallButtonText: {
    color: 'grey', // Adjust the color as needed
    fontSize: 16,
  },
});