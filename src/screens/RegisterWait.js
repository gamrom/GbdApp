import { View, Text } from 'react-native';
import tw from 'twrnc';
import { ExternalLink } from '@components/ExternalLink';


export const RegisterWait = () => {
  return (
    <View style={tw`flex justify-center h-full bg-white px-[15px]`}>
      <Text style={tw`font-bold text-2xl`}>회원가입 대기 중 입니다.</Text>
      <Text style={tw`text-lg`}>아래 절차 진행 후 로그인 가능합니다</Text>
      <Text>1. 회원 설문 작성</Text>
      <Text>2. 회부 납부</Text>
      <Text>3. 관리자 승인</Text>

      <ExternalLink url="https://www.naver.com" style={tw`text-[#FF0000]`}>
        설문하러 가기
      </ExternalLink>

      <Text>관리자 승인은 하루이내에 처리됩니다.</Text>
    </View>
  );
}