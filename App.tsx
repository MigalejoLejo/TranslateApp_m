/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import tw from "twrnc";
import {
  Pressable,
  SafeAreaView,
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import LanguageSelector from './components/LanguageSelector';
import InputField from './components/InputField';
import Translate from './components/Translate';

import { NavigationContainer } from '@react-navigation/native';


function App(): JSX.Element {

  const [language, setLanguage] = useState("es")
  const [text, setText] = useState("")

  useEffect(() => {
    setText(text)
  }, [text])



  const profileToast = () => {
    Alert.alert('Title', 'This is a message', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Confirm', onPress: () => console.log('Hello!') }
    ])
  }



  return (
    <NavigationContainer>
      <SafeAreaView style={tw`flex flex-1`}>

        {/* HEADER */}
        {/* ---------------------------------------------------- */}
        <View style={tw`px-8- py-5 flex flex-row items-center justify-between bg-gray-200 border-b-2`}>
          <Text style={tw`text-2xl font-bold`}>Translate App</Text>
          <Pressable
            style={tw`flex justify-center items-center w-14 h-14 bg-blue-200 border-white border-2 rounded-full`}
            onPress={profileToast}>
            <Text style={tw`text-xl font-semibold`}>MC2</Text>
          </Pressable>
        </View>
        {/* ---------------------------------------------------- */}



        {/* BODY */}
        {/* ---------------------------------------------------- */}
        <View>
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <InputField setText={setText} />
          <Translate text={text} language={language} />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
