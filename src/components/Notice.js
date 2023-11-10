import React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import tw from 'twrnc';

export const Notice = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View>
      <List.Section title="공지사항">

        <List.Item
          title="감보동 인스타 바로가기"
          description="활동 사진 보러가기"
          left={props => <List.Icon {...props} icon="instagram" />}
          style={tw`border-b border-gray-200`}
        />

        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
          style={tw`border-b border-gray-200`}
        />

      </List.Section>
    </View>
  )
}