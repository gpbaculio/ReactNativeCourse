import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {DynamicPressable, DynamicText, DynamicView} from 'src/components';

import {colors} from 'themeConfig';

const LittleLemonHeader = () => {
  return (
    <DynamicView variant="header">
      <DynamicView
        alignSelf="center"
        flexDirection="row"
        flex={1}
        alignItems="center"
        justifyContent="center">
        <DynamicPressable position="absolute" left={0}>
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
