import {Image, Modal, Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import detailProductStyles from './styles.tsx';
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import {formatCurrency} from 'react-native-format-currency';
import ImageViewer from 'react-native-image-zoom-viewer';
import {HeaderComponent} from "../../components/header/header.tsx";

export interface IDetailProduct {
  navigation: any;
  route: any;
}

const DetailProductScreen: React.FC<IDetailProduct> = ({navigation, route}) => {
  const {product} = route.params;
  const [modalImage, setModalImage] = useState(false);

  const [valueFormattedWithSymbol] = formatCurrency({
    amount: Number(product.price),
    code: 'COP',
  });

  const images = [
    {
      url: product.image,
    },
  ];

  return (
    <SafeAreaView style={detailProductStyles.container}>
      <HeaderComponent title={product.name} navigation={navigation} />
      <Pressable onPress={() => setModalImage(true)}>
        <Image
          source={{uri: product.image}}
          style={detailProductStyles.imageDetail}
        />
      </Pressable>
      <View style={detailProductStyles.containerInfoText}>
        <Text style={detailProductStyles.textInfo}>Descripción:</Text>
        <Text style={detailProductStyles.textDescription}>
          {product.description}
        </Text>
      </View>
      <View style={detailProductStyles.containerInfoText}>
        <Text style={detailProductStyles.textInfo}>Precio:</Text>
        <Text style={detailProductStyles.textPrice}>
          {valueFormattedWithSymbol}
        </Text>
      </View>
      <View style={detailProductStyles.containerInfoText}>
        <Text style={detailProductStyles.textInfo}>Stock:</Text>
        <Text style={detailProductStyles.textStock}>{product.stock}</Text>
      </View>
      <Modal visible={modalImage} transparent={true}>
        <FontAwesome
          name={'close'}
          color={'white'}
          size={40}
          style={detailProductStyles.containerClose}
          onPress={() => setModalImage(false)}
        />
        <ImageViewer imageUrls={images} />
      </Modal>
    </SafeAreaView>
  );
};

export default DetailProductScreen;
