import { FlatList, Pressable, Text, View } from "react-native";
import tw from "twrnc";
import LANGUAGES from "../libs/Languages";
import { useEffect, useState } from "react";

const LanguageSelector = ({ language, setLanguage }) => {

    const [selectedLanguage, setSelectedLanguage] = useState(0)

    useEffect(() => {
        const selectedLanguageIndex = LANGUAGES.findIndex(item => item.value === language)
        setSelectedLanguage(selectedLanguageIndex)
        console.log("Language Index set to: ",selectedLanguage)
    }, [language])


    return (
        <View style={tw`rounded-xl py-3`}>
            <View style={tw`flex flex-row justify-between mb-5 px-8`}>
                <Text style={tw`text-xl font-semibold `} >Selected Language: </Text>
                <View style={tw`px-3 border-2 bg-blue-100 border-white rounded-md`}>
                    <Text style={tw`text-xl text-center font-bold`} >{LANGUAGES[selectedLanguage].label}</Text>
                </View>

            </View>
            <View style={tw`flex flex-row flex-wrap gap-4 mb-3`}>

                <FlatList
                    data={LANGUAGES}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => setLanguage(item.value)}
                            style={tw`
                                ${language === item.value
                                    ? `bg-blue-400`
                                    : `bg-gray-400`
                                }  rounded-md px-4 w-30 h-30 justify-center items-center`}>
                            <Text style={tw`text-white font-semibold text-lg`}>{item.label}</Text>
                        </Pressable>
                    )}
                    keyExtractor={item => item.label}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={tw`w-2`}></View>}
                />
            </View>
        </View>
    )
}

export default LanguageSelector