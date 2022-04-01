import styled from 'styled-components/native';
import {Image, ScrollView} from 'react-native';

import {colors} from '../../styles/colors';

export const Header = styled.View`
  margin: 24px 0;
`;

export const GOBackButtonContainer = styled.TouchableOpacity`
  width: 100px;
`;

export const GOBackButtonContent = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: ${colors.mediumDark};
  border-radius: 10px;
  padding: 8px;
`;

export const GOBackText = styled.Text`
  align-items: center;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  align-self: center;
`;

export const Scroll = styled(ScrollView).attrs({
  flex: 1,
})``;

export const Content = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.mediumDark};
  border-radius: 20px;
  flex: 2;
`;

export const IMGInfosPokemon = styled(Image).attrs({})`
  height: 300px;
  width: 300px;
  margin-top: 40px;
`;

export const Name = styled.Text`
  color: ${colors.white};
  font-size: 40px;
  font-weight: bold;
  text-transform: capitalize;
  margin: 24px;
`;

export const Footer = styled.View`
  flex: 1;
`;

export const WrapperSkillsText = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const WrapperItems = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const WrapperPokeball = styled.View`
  margin: 10px 8px 0 0;
`;

export const SkillsTitle = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  font-weight: 700;
  margin-top: 8px;
`;

export const SkillsText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;
