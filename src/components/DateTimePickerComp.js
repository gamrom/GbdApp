import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import tw from 'twrnc';

export const DateTimePickerComp = ({ dateTime, setDateTime, text }) => {

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDateTime(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={tw`mt-[10px]`}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'left',

      }}>
        <Button onPress={showDatepicker} title="Show date picker!" mode='elevated'>{text} 날짜</Button>
        <Button onPress={showTimepicker} title="Show time picker!" mode='elevated'>{text} 시간</Button>

      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dateTime}
          mode={mode}
          display='spinner'
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  )
}
