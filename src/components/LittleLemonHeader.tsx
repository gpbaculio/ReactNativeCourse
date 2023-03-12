import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {DynamicPressable, DynamicText, DynamicView} from 'src/components';
import {useDefaultNavigation} from 'src/navigation/hooks';
import {colors} from 'themeConfig';

const LittleLemonHeader = () => {
  const drawer = useDefaultNavigation();

  return (
    <DynamicView
      pt={40}
      pb="s"
      paddingHorizontal="l"
      backgroundColor="#EE9972"
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
          position="absolute"
          left={0}
          onPress={() => {
            drawer.openDrawer();
          }}>
          <MaterialCommunityIcons
            name="menu"
            size={24}
            color={colors['#333333']}
          />
        </DynamicPressable>
        <DynamicView>
          <DynamicText color="#000000" fontSize={30} textAlign="center">
            Little Lemonssss
          </DynamicText>
        </DynamicView>
      </DynamicView>
    </DynamicView>
  );
};

export default LittleLemonHeader;
