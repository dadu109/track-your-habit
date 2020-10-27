import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text } from "react-native";
import LoadAssets from './components/LoadAssets'

let customFonts = {
  'regular': require('../assets/fonts/Roboto-Regular.ttf'),
  'medium': require('../assets/fonts/Roboto-Medium.ttf'),
  'mediumItalic': require('../assets/fonts/Roboto-MediumItalic.ttf'),
  'bold': require('../assets/fonts/Roboto-Bold.ttf'),
};


function Root() {
  return (
    <LoadAssets fonts={customFonts}>
      <Text style={styles.text}>Hello World</Text>
      <StatusBar style="auto" />
    </LoadAssets>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'mediumItalic'
  },
});

registerRootComponent(Root);
