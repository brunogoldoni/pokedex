import styled from 'styled-components/native';

import {colors} from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  padding: 16px;
  border-radius: 10px;
`;

export const Label = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 700;
`;
