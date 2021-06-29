import styled from 'styled-components/native';
import {colors} from '../../styles/colors';

export const EmptyContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  min-height: 500px;
`;

export const EmptyLabel = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  font-weight: 600;
  flex-wrap: wrap;
  text-align: center;
  width: 70%;
`;
