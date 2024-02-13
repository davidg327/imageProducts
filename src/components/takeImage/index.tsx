import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {useTakeImage} from '../../hooks/use-take-image';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface ITakeImageScreen {
  route: any;
  navigation: any;
}
export const TakeImageScreen: React.FC<ITakeImageScreen> = ({
  route,
  navigation,
}) => {
  const {setPhoto} = route.params;

  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const camera = useRef(null);
  const device = useCameraDevice('back');

  const takePhoto = useTakeImage();

  return (
    <>
      {device != null && hasPermission && (
        <Camera
          isActive={true}
          ref={camera}
          photo={true}
          device={device}
          style={StyleSheet.absoluteFill}
          orientation="portrait"
        />
      )}
      <TouchableOpacity
        style={{
          width: '50%',
          padding: 10,
          borderRadius: 15,
          position: 'absolute',
          bottom: '10%',
          alignSelf: 'center',
          backgroundColor: 'white',
        }}
        onPress={() =>
          takePhoto(camera).then(response => {
            setPhoto(response);
            navigation.goBack();
          })
        }>
        <Text style={{color: 'black', textAlign: 'center'}}>Tomar foto</Text>
      </TouchableOpacity>
    </>
  );
};
