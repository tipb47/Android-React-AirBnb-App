import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Button title="LOG IN"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  loginContainer: {
    width: '100%',
    height: '100%'
  },
  fullWidthButton: {
    width: '80%',
    marginVertical: 30,
  },
});