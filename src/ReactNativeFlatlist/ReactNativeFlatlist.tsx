import React from 'react';

import {DynamicView} from 'src/components';
import {
  LittleLemonHeader,
  LittleLemonFooter,
  LittleLemonBody,
} from './components';

const ReactNativeFlatlist = () => {
  return (
    <DynamicView backgroundColor="#333333" flex={1}>
      <LittleLemonHeader />
      <LittleLemonBody />
      <LittleLemonFooter />
    </DynamicView>
  );
};

export default ReactNativeFlatlist;
