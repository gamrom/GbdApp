import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';
import { useState } from 'react';
import tw from 'twrnc';
import auth from '@react-native-firebase/auth';

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [isSecureA, setIsSecureA] = useState(true);
  const [isSecureB, setIsSecureB] = useState(true);

  const tryRegister = () => {
    if (pw !== pwConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    auth().createUserWithEmailAndPassword(email, pw)
      .then(() => {
        alert('회원가입이 완료되었습니다.');
        navigation.navigate('RegisterWait');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('이미 사용중인 이메일입니다.');
        }
        if (error.code === 'auth/invalid-email') {
          alert('유효하지 않은 이메일입니다.');
        }
        if (error.code === 'auth/weak-password') {
          alert('비밀번호는 6자리 이상이어야 합니다.');
        }
      })
  }

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
        onChangeText={pwConfirm => setPwConfirm(pwConfirm)}
        right={<TextInput.Icon icon="eye"
          onPress={() => setIsSecureB(!isSecureB)}
        />}
      />

      <Button style={tw`mt-4`} mode='elevated' onPress={
        () => {
          tryRegister();
        }
      }>회원가입 하기</Button>
    </View>
  );
}