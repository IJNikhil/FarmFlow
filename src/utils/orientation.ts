import Orientation from 'react-native-orientation-locker';

export const lockToPortrait = () => {
  if (Orientation) Orientation.lockToPortrait();
  else console.warn('Orientation is not available');
};

export const unlockAllOrientations = () => {
  if (Orientation) Orientation.unlockAllOrientations();
};
