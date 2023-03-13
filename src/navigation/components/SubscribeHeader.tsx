import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {DynamicPressable, DynamicText, DynamicView} from 'src/components';
import {useDefaultNavigation} from '../hooks';
import {colors} from 'themeConfig';

const LittleLemonHeader = () => {
  const navigation = useDefaultNavigation();

  const onLeftArrowPress = () => {
    navigation.goBack();
  };

  return (
    <DynamicView
      variant="header"
      paddingHorizontal="s"
      flexDirection="row"
      alignItems="center"
      justifyContent="center">
      <DynamicView
        alignSelf="center"
        flexDirection="row"
        flex={1}
        alignItems="center"
        justifyContent="center">
        <DynamicPressable
          pt="s"
          position="absolute"
          left={0}
          onPress={onLeftArrowPress}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={36}
            color={colors['#FFFFFF']}
          />
        </DynamicPressable>
        <DynamicText variant="header">Little Lemonssss</DynamicText>
      </DynamicView>
    </DynamicView>
  );
};

export default LittleLemonHeader;
