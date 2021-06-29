import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Content = styled.View`
  align-items: center;
  flex: 1;
  padding: 24px;
`;

export const WrapperInput = styled.View`
  margin-bottom: 16px;
`;

export const IMGIntroduction = styled(Image).attrs({})``;

export const Footer = styled.View`
  justify-content: flex-end;
  padding: 24px;
  flex: 1;
`;
