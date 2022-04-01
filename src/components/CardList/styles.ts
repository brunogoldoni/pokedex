import styled from 'styled-components/native';
import {Image} from 'react-native';

import {colors} from '../../styles/colors';

export const CardContainer = styled.TouchableOpacity`
  background-color: ${colors.mediumDark};
  border-radius: 16px;
  padding: 24px 16px;
  width: 47%;
  min-height: 100px;
  margin: 0 16px 16px 0;
  justify-content: space-between;
`;

export const Name = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  flex-wrap: wrap;
  margin-bottom: 8px;
  text-transform: capitalize;
`;

export const WrapperIMG = styled.View`
  align-self: flex-end;
  flex: 1;
`;

export const IMGPokemon = styled(Image).attrs({})`
  min-width: 120px;
  min-height: 120px;
  position: relative;
  top: 8px;
`;
