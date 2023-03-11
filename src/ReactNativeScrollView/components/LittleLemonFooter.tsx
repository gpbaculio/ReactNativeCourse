import * as React from 'react';

import {DynamicText, DynamicView} from 'src/components';

export default function LittleLemonFooter() {
  return (
    <DynamicView backgroundColor="#EE9972" mb={10}>
      <DynamicText
        fontSize={18}
        color="#000000"
        fontStyle="italic"
        textAlign="center">
        All rights reserved by Little Lemon, 2022
      </DynamicText>
    </DynamicView>
  );
}
