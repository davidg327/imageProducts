import React from 'react';
import {Text, View} from 'react-native';
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import headerStyles from './styles.tsx';

export interface IHeaderComponent {
  title: string;
  navigation: any;
}

export const HeaderComponent: React.FC<IHeaderComponent> = ({
  title,
  navigation,
}) => {
  return (
    <View style={headerStyles.containerHeader}>
      <View style={headerStyles.containerIconLeft}>
        <FontAwesome
          name={'arrow-left'}
          onPress={() => navigation.goBack()}
          size={24}
        />
      </View>
      <Text style={headerStyles.titleHeader}>{title}</Text>
    </View>
  );
};
