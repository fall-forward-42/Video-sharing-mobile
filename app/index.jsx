import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomeButton from "./components/CustomeButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          ></Image>
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5 ">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless about your-self abillities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 right-24"
              resizeMode="contain"
            ></Image>
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where unleashing creativity intersects with groundbreaking
            innovation: set forth on an expedition of boundless exploration
            alongside Aora. 🚀✨
          </Text>
          <CustomeButton
            title="Continue with Email"
            handlePress={() => {router.push('/home')}}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      {/* 
        Because use the dark theme so set the mode for phone is night
       */}
      <StatusBar backgroundColor="#161622" style="light"></StatusBar>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
