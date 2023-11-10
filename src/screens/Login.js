import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';
import { useState } from 'react';
import tw from 'twrnc';

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={tw`flex justify-center h-full bg-white px-[15px]`}>
      <TextInput
        label="이메일"
        placeholder="아이디(이메일)를 입력해주세요."
        placeholderTextColor={'#999999'}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        label="비밀번호"
        value={pw}
        secureTextEntry={isSecure}
        onChangeText={pw => setPw(pw)}
        right={<TextInput.Icon icon="eye"
          onPress={() => setIsSecure(!isSecure)}
        />}
      />
      <Button style={tw`mt-4`} mode='elevated' onPress={() => navigation.navigate('Main')}>로그인 하기</Button>

      <Button style={tw`mt-4`} mode="contained" onPress={() => navigation.navigate('Register')}>감보동 가입하기</Button>
    </View>
  );
}

