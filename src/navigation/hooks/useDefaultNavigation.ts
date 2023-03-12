import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {StackNavigatorParamList} from '../Navigation';

type NavigationProps = NativeStackNavigationProp<StackNavigatorParamList>;

const useDefaultNavigation = () => {
  const navigation = useNavigation<NavigationProps>();

  return navigation;
};

export default useDefaultNavigation;
