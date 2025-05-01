import IMAGES from '../../assets/icons';
import SCREENS from '../../screens/screenNames';
import APP_CONSTANTS from '../strings/appConstants';


const TABS = [
  {
    name: SCREENS.HOME,
    label: APP_CONSTANTS.LABELS.HOME,
    icon: IMAGES.HOME,
  },
  {
    name: SCREENS.PLAY,
    label: APP_CONSTANTS.LABELS.PLAY,
    icon: IMAGES.PLAY,
  },
  {
    name: SCREENS.CATEGORY,
    label: APP_CONSTANTS.LABELS.CATEGORY,
    icon: IMAGES.CATEGORY,
  },
  {
    name: SCREENS.USER,
    label: APP_CONSTANTS.LABELS.USER,
    icon: IMAGES.USER,
  },
  {
    name: SCREENS.TROLLEY,
    label: APP_CONSTANTS.LABELS.TROLLEY,
    icon: IMAGES.TROLLEY,
  },
];

export default TABS;
