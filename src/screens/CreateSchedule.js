import React from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';
import { useState } from 'react';
import tw from 'twrnc';
import { DateTimePickerComp } from '@components/DateTimePickerComp';


export const CreateSchedule = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [leader, setLeader] = useState('');
  const [content, setContent] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [maxMember, setMaxMember] = useState('');
  const [isConfirm, setIsConfirm] = useState(false);

  const [startDateTime, setStartDateTime] = useState(new Date(1598051730000));
  const [endDateTime, setEndDateTime] = useState(new Date(1598051730000));
  
  
  return (
    <View style={tw`px-[15px]`}>
      <Text>번개일정 생성</Text>
      <TextInput
        label="일정제목"
        placeholder="일정제목"
        placeholderTextColor={'#999999'}
        value={title}
        onChangeText={title => setTitle(title)}
      />

      <TextInput
        label="장소"
        placeholder="장소"
        placeholderTextColor={'#999999'}
        value={location}
        onChangeText={location => setLocation(location)}
      />


      <TextInput
        label="리더"
        placeholder="리더"
        placeholderTextColor={'#999999'}
        value={leader}
        onChangeText={leader => setLeader(leader)}
      />

      <TextInput
        label="내용"
        placeholder="내용"
        placeholderTextColor={'#999999'}
        value={content}
        multiline={true}
        onChangeText={content => setContent(content)}
      />


      <TextInput
        label="최대인원"
        placeholder="최대인원"
        placeholderTextColor={'#999999'}
        value={maxMember}
        onChangeText={maxMember => setMaxMember(maxMember)}
      />

      <DateTimePickerComp dateTime={startDateTime} setDateTime={setStartDateTime} text="시작" />
      <DateTimePickerComp dateTime={endDateTime} setDateTime={setEndDateTime} text="종료" />

      <Text style={tw`text-center mt-[10px]`}>{startDateTime.toLocaleString()} ~ {endDateTime.toLocaleString()}</Text>
      <Button style={tw`mt-4`} mode='contained' onPress={() => setIsConfirm(!isConfirm)}>일정 생성</Button>
    </View>
  )
}