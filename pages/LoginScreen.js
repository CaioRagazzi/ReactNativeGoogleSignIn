import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Stack, Input, Center, Icon, FormControl, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

import { AuthContext } from "../contexts/auth";

GoogleSignin.configure();

const LoginScreen = () => {
  const [show, setShow] = useState(false);
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function logIn() {
    signIn(email, password);
  }

  function googleLogIn() {
    GoogleSignin.signIn()
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <Center style={{ flex: 1 }}>
      <Stack space={4}>
        <FormControl isRequired w="100%" alignItems="center">
          <Input w={{
            base: "75%",
            md: "25%"
          }}
            InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}
            placeholder="Name"
            onChangeText={newText => setEmail(newText)} />
        </FormControl>
        <FormControl isRequired w="100%" alignItems="center">
          <Input w={{
            base: "75%",
            md: "25%"
          }}
            type={show ? "text" : "password"}
            InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />}
            placeholder="Password"
            onChangeText={newText => setPassword(newText)} />
        </FormControl>
        <Button onPress={() => logIn()}>Log in</Button>
      </Stack>
      <GoogleSigninButton
        style={{ width: 285, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleLogIn}
      />
    </Center >
  )
}

export default LoginScreen

const styles = StyleSheet.create({})