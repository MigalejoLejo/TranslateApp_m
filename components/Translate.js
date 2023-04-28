import { useEffect, useState} from "react";
import { Pressable, Text, TextInput, View, Alert } from "react-native";
import tw from "twrnc";



const Translate = ({ text, language }) => {
    const [translatedText, setTranslatedText] = useState("")

    useEffect(() => {
        setTranslatedText(useTranslation(text, language))
        console.log("translated text: ",translatedText)
    },[text, language])


    const debounce = (fn) => {
        let id = null;

        return (...args) => {
            if (id) {
                clearTimeout(id);
            }
            id = setTimeout(() => {
                fn(...args);
                id = null;
            }, 300);
        };
    };

    const useTranslation = (text, language) => {
        const data = {
          q: text,
          target: language,
        };
        const translation = debounce(async () => {
          try {
            await fetch(
              'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDNltKX8oKTEQWRYGUtc4zzFWfNjFV2DvI',
              {
                method: 'POST',
                body: JSON.stringify(data),
              },
            )
              .then(data => data.json())
              .then(t => setTranslatedText(t.data.translations[0].translatedText));
          } catch (err) {
            console.log(err);
          }
        });
    
        return translation()
      };

    return (
        <View style={tw`flex flex-col items-center`}>
            <TextInput
                editable={false}
                multiline={true}
                numberOfLines={4}
                textAlignVertical={"top"}
                placeholder={"translation:"}
                style={tw`border-4 w-full border-gray-100 focus:border-blue-400 rounded-md text-xl text-sky-600 p-8`}
            >

                <Text> [{language}]: {translatedText} </Text>

            </TextInput>
            <Pressable
                    style={tw`absolute mt-3 mr-3 w-8 right-0 rounded-full bg-gray-100 border-2 justify-center items-center border-gray-200`}
                    onPress={() => (console.log("tutu"))}>
                    <View>
                        <Text style={tw`text-gray-400 font-semibold text-xl`}>S</Text>
                    </View>
                </Pressable>
        </View>
    )
}

export default Translate