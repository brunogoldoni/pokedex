import styled from 'styled-components/native';
import {TextInput} from 'react-native';

import {colors} from '../../styles/colors';

export const Container = styled(TextInput).attrs({})`
  background-color: ${colors.mediumDark};
  color: ${colors.white};
  border-radius: 10px;
  height: 56px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 24px;
  padding: 16px;
  width: 100%;
`;
