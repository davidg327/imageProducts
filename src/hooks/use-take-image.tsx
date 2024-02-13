import {useCallback, useMemo} from 'react';

export const useTakeImage = () => {
  const takePhotoOptions = useMemo(
    () => ({
      photoCodec: 'jpeg',
      qualityPrioritization: 'speed',
      flash: 'off',
      quality: 90,
      skipMetadata: true,
      enableAutoStabilization: true,
    }),
    [],
  );

  return useCallback(
    async (camera: any) => {
      try {
        if (camera.current == null) {
          throw new Error('Camera ref is null!');
        }
        return await camera.current.takePhoto(takePhotoOptions);
      } catch (e) {
        console.error('Failed to take photo!', e);
      }
    },
    [takePhotoOptions],
  );
};
