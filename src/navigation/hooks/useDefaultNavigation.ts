import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

import {BottomTabNavigatorParamList} from '../Navigation';

type NavigationProps = BottomTabNavigationProp<BottomTabNavigatorParamList>;

const useDefaultNavigation = () => {
  const navigation = useNavigation<NavigationProps>();

  return navigation;
};

export default useDefaultNavigation;
