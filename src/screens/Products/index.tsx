import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import productStyles from './styles.tsx';
import productsJson from './../../products/products.json';
import {useAppDispatch, useAppSelector} from '../../hooks/hook.ts';
import {getProducts} from '../../store/product/reducer.ts';
import {CardProduct} from './components/cardProduct.tsx';
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';

export interface IProducts {
  navigation: any;
}

export interface IItemProducts {
  item: {
    id: number;
    name: string;
    image: string;
    stock: number;
    description: string;
    price: number;
  };
}

const ProductsScreen: React.FC<IProducts> = ({navigation}) => {
  const {products} = useAppSelector(state => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts(productsJson));
  }, []);

  const Item = ({item}: IItemProducts) => {
    return <CardProduct item={item} navigation={navigation} />;
  };

  const Empty = () => {
    return (
      <View>
        <Text>No hay datos</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={productStyles.container}>
      <Text style={productStyles.title}>Lista de productos</Text>
      <FontAwesome
        name={'plus'}
        color={'#146401'}
        size={25}
        style={productStyles.icon}
      />
      <FlatList
        data={products}
        renderItem={({item}) => <Item item={item} />}
        numColumns={2}
        ListEmptyComponent={Empty}
        columnWrapperStyle={productStyles.flatList}
        contentContainerStyle={productStyles.paddingFlatList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;
