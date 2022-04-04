import styled from 'styled-components/native';

import { colors } from '../../styles/colors';

export const Content = styled.View`
  padding: 24px 0;
`;

export const UserLabel = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-right: 8px;
  color: ${colors.white};
`;

export const WrapperUserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;