import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';
import { useState } from 'react';
import tw from 'twrnc';

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [isSecureA, setIsSecureA] = useState(true);
  const [isSecureB, setIsSecureB] = useState(true);

  return (
    <View style={tw`flex justify-center h-full bg-white px-[15px]`}>

      <TextInput
        label="이메일"
        placeholder="이메일"
        placeholderTextColor={'#999999'}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        label="비밀번호"
        value={pw}
        secureTextEntry={isSecureA}
        onChangeText={pw => setPw(pw)}
        right={<TextInput.Icon icon="eye"
          onPress={() => setIsSecureA(!isSecureA)}
        />}
      />
      <TextInput
        label="비밀번호 확인"
        value={pwConfirm}
        secureTextEntry={isSecureB}
        onChangeText={pw => setPw(pwConfirm)}
        right={<TextInput.Icon icon="eye"
          onPress={() => setIsSecureB(!isSecureB)}
        />}
      />

      <Button style={tw`mt-4`} mode='elevated' onPress={() => navigation.navigate('RegisterWait')}>회원가입 하기</Button>
    </View>
  );
}