import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {NativeStackNavigatorParamList} from '../Navigation';

type NavigationProps = NativeStackNavigationProp<NativeStackNavigatorParamList>;

const useDefaultNavigation = () => {
  const navigation = useNavigation<NavigationProps>();

  return navigation;
};

export default useDefaultNavigation;
