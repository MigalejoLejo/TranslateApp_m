import { Pressable, Text, TextInput, View } from "react-native";
import tw from "twrnc";


const InputField = ({ setText }) => {

    const returnText = (text) => {
        setText(text)
        console.log("Text entered: ", text)
    }

    return (
        <View style={tw``}>
            <TextInput
                ref={input => { this.textInput = input }}
                editablesdf
                multiline={true}
                numberOfLines={4}
                textAlignVertical={"top"}
                placeholder={"Enter your text"}
                onChangeText={(textInput) => returnText(textInput)}
                style={tw`border-4 border-gray-100 focus:border-blue-400 rounded-md text-xl p-8`}>
            </TextInput>

            <Pressable
                    style={tw`absolute mt-3 mr-3 w-8 right-0 rounded-full bg-gray-100 border-2 hover:bg-gray-800 justify-center items-center border-gray-200`}
                    onPress={() => (this.textInput.clear())}>
                    <View>
                        <Text style={tw`text-gray-400 font-semibold text-xl`}>X</Text>
                    </View>
                </Pressable>

        </View>
    )
}

export default InputField