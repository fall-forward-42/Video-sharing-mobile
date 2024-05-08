import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { icons, images } from "../../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle,
  ...props
}) => {
    const [showPassword,setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="flex-row border-2 border-black-200 w-full h-16 px-4bg-black-100 rounded-2xl focus:border-secondary-100 items-center">
            <TextInput className='flex-1 text-white font-psemibold text-base px-5'
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#7b7b8b'
                onChangeText={handleChangeText}    
                secureTextEntry={title === 'Password' && !showPassword}  
                {...props}
            >
                
            </TextInput>
            {title === 'Password' && (
                <TouchableOpacity onPress={()=>
                    setShowPassword(!showPassword)
                }>
                    <Image source={!showPassword ? icons.eye : icons.eyeHide} 
                        className='w-12 h-6 '
                        resizeMode="contain"
                    ></Image>
                </TouchableOpacity>
            )}
          
      </View>
    </View>
  );
};

export default FormField;
