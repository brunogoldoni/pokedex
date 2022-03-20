import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {colors} from '../../styles/colors';

export const Content = styled.View`
  flex: 1;
`;

export const WrapperGrettings = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const GrettingsText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 600;
`;

export const NickName = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 600;
`;

export const WrapperTitle = styled.View`
  margin-top: 8px;
`;

export const WrapperItems = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  font-weight: bold;
  justify-content: flex-start;
`;

export const WrapperList = styled.View`
  flex: 1;
  margin-top: 48px;
`;

export const List = styled(FlatList).attrs({
  flexDirection: 'column',
  numColumns: 2,
  flex: 1,
})``;
