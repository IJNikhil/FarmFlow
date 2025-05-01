import { useEffect } from 'react';
import { lockToPortrait, unlockAllOrientations } from '../utils/orientation';

const useOrientationLock = () => {
  useEffect(() => {
    lockToPortrait();

    return () => {
      unlockAllOrientations();
    };
  }, []);
};

export default useOrientationLock;
