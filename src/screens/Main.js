import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { BottomNavigation } from "react-native-paper";
import { ScheduleGame } from "@components/ScheduleGame";
import { Notice } from "@components/Notice";


export const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'scheduleGame', title: '번개 일정', focusedIcon: 'gamepad-variant', unfocusedIcon: 'gamepad-variant-outline' },
    { key: 'notice', title: '공지사항', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    scheduleGame: ScheduleGame,
    notice: Notice,
  });

  return (
    <View>
      <View style={tw`flex justify-center h-full bg-white`}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </View>
    </View>
  );
}