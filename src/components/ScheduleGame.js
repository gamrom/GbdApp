import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import tw from 'twrnc';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const ScheduleGame = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`pb-[50px]`}>
      <Button title="Go to Details" style={tw`ml-auto my-4 mr-2`} mode="contained" onPress={() => navigation.navigate('CreateSchedule')}>일정 추가</Button>
      <CalendarPicker
        previousTitle={"이전"}
        nextTitle={"다음"}
        weekdays={['일', '월', '화', '수', '목', '금', '토']}
        months={['1월', '2월', '3월', '4월', '5월', '6월',
          '7월', '8월', '9월', '10월', '11월', '12월']}
      />
    </View>
  );
}

