import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../components/FormField";
import CustomeButton from "../components/CustomeButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    pwd: "",
    username: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.pwd || !form.username) {
      Alert.alert("Error", "Please fill fully the fields !");
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.username, form.email, form.pwd);
      //successfully
      console.log(result);
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          ></Image>
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibole">
            Register
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) =>
              setForm({
                ...form,
                username: e,
              })
            }
            otherStyle="mt-7"
          ></FormField>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            otherStyle="mt-7"
            keyboardType="email-address"
           // autoComplete="email" //for android
          ></FormField>
          <FormField
            title="Password"
            value={form.pwd}
            handleChangeText={(e) =>
              setForm({
                ...form,
                pwd: e,
              })
            }
            otherStyle="mt-7"
          ></FormField>
          <CustomeButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          ></CustomeButton>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have account !
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary-100"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
