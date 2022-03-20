import styled from 'styled-components/native';
import Back from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../styles/colors';

export const Pokeball = styled(Icon).attrs({
  size: 32,
  color: colors.red,
  name: 'pokeball',
})``;

export const PokeballInfos = styled(Icon).attrs({
  size: 18,
  color: colors.red,
  name: 'pokeball',
})``;

export const PokemonGO = styled(Icon).attrs({
  size: 48,
  color: colors.red,
  name: 'pokemon-go',
})``;

export const BackIcon = styled(Back).attrs({
  size: 22,
  color: colors.white,
  name: 'chevron-left',
})`
  margin-right: 8px;
`;
