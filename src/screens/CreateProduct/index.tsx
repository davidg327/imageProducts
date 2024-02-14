import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  View,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import {HeaderComponent} from '../../components/header/header.tsx';
import createProductStyles from './styles.tsx';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAppDispatch} from '../../hooks/hook.ts';
import {createProduct} from '../../store/product/reducer.ts';
import {PORTRAIT} from 'react-native-orientation-locker';

export interface ICreateProduct {
  navigation: any;
  route: any;
}

const CreateProductScreen: React.FC<ICreateProduct> = ({navigation, route}) => {
  const {orientation} = route.params;
  const dispatch = useAppDispatch();
  const [photo, setPhoto] = useState({});

  const creteSchema = Yup.object().shape({
    name: Yup.string().required('Nombre requerido'),
    description: Yup.string().required('Descripción requerida'),
    price: Yup.number().required('Precio requerido'),
    stock: Yup.number().required('Stock requerido'),
  });

  const handleCreateProducts = (values: any) => {
    let body = {
      ...values,
      image: `file://${photo.path}`,
    };
    dispatch(createProduct(body));
    navigation.goBack();
    Alert.alert('Felicitaciones', 'El producto se creo satisfactoriamente');
  };

  return (
    <SafeAreaView style={createProductStyles.container}>
      <HeaderComponent title={'Crear producto'} navigation={navigation} />
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{name: '', description: '', price: '', stock: ''}}
          validationSchema={creteSchema}
          onSubmit={values => handleCreateProducts(values)}>
          {({errors, handleChange, handleSubmit, values}) => (
            <>
              <View style={createProductStyles.containerInput}>
                <TextInput
                  onChangeText={handleChange('name')}
                  placeholder={'Nombre'}
                  value={values.name}
                />
              </View>
              {errors.name && (
                <Text style={createProductStyles.textError}>{errors.name}</Text>
              )}
              <View style={createProductStyles.containerInput}>
                <TextInput
                  onChangeText={handleChange('description')}
                  placeholder={'Descripción'}
                  value={values.description}
                />
              </View>
              {errors.description && (
                <Text style={createProductStyles.textError}>
                  {errors.description}
                </Text>
              )}
              <View style={createProductStyles.containerInput}>
                <TextInput
                  onChangeText={handleChange('price')}
                  placeholder={'Precio'}
                  value={values.price}
                  keyboardType={'numeric'}
                />
              </View>
              {errors.price && (
                <Text style={createProductStyles.textError}>
                  {errors.price}
                </Text>
              )}
              <View style={createProductStyles.containerInput}>
                <TextInput
                  onChangeText={handleChange('stock')}
                  placeholder={'Stock'}
                  value={values.stock}
                  keyboardType={'numeric'}
                />
              </View>
              {errors.stock && (
                <Text style={createProductStyles.textError}>
                  {errors.stock}
                </Text>
              )}
              <Pressable
                style={createProductStyles.containerButtonImage}
                onPress={() =>
                  navigation.navigate('TakeImage', {setPhoto: setPhoto})
                }>
                <Text style={createProductStyles.textButton}>Subir imagen</Text>
              </Pressable>
              {photo?.path && (
                <Image
                  source={{uri: `file://${photo.path}`}}
                  style={
                    orientation === PORTRAIT
                      ? createProductStyles.imageProductVertical
                      : createProductStyles.imageProductHorizontal
                  }
                />
              )}
              <Pressable
                style={createProductStyles.containerButton}
                onPress={() => handleSubmit()}>
                <Text style={createProductStyles.textButton}>
                  Crear producto
                </Text>
              </Pressable>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CreateProductScreen;
