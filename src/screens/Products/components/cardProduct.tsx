import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import cartProductStyles from './styles.tsx';
import {formatCurrency} from 'react-native-format-currency';

export interface ICardProduct {
  item: {
    id: number;
    name: string;
    image: string;
    stock: number;
    description: string;
    price: number;
  };
  navigation: any;
}

export const CardProduct = ({item, navigation}: ICardProduct) => {
  const [valueFormattedWithSymbol] = formatCurrency({
    amount: Number(item.price),
    code: 'COP',
  });

  return (
    <View style={cartProductStyles.card}>
      <Image source={{uri: item.image}} style={cartProductStyles.cardImage} />
      <Text style={cartProductStyles.textName}>{item.name}</Text>
      <Text style={cartProductStyles.textPrice}>
        {valueFormattedWithSymbol}
      </Text>
      <View style={cartProductStyles.containerButtons}>
        <Pressable
          style={cartProductStyles.containerButton}
          onPress={() => navigation.navigate('DetailProduct', {product: item})}>
          <Text style={cartProductStyles.textButton}>Ver Producto</Text>
        </Pressable>
        <Pressable style={cartProductStyles.containerButton}>
          <Text style={cartProductStyles.textButton}>Borrar Producto</Text>
        </Pressable>
      </View>
    </View>
  );
};
