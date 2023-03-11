import {DynamicText, DynamicView} from 'src/components';

export default function LittleLemonHeader() {
  return (
    <DynamicView backgroundColor="#F4CE14">
      <DynamicText
        color="#000000"
        padding={40}
        fontSize={30}
        textAlign="center">
        Little Lemon
      </DynamicText>
    </DynamicView>
  );
}
