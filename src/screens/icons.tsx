import styled from 'styled-components/native';

import FeatherIcons from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../styles/colors';

export const Pokeball = styled(Icon).attrs({
  size: 32,
  color: colors.error,
  name: 'pokeball',
})``;

export const PokeballInfos = styled(Icon).attrs({
  size: 18,
  color: colors.error,
  name: 'pokeball',
})``;

export const PokemonGO = styled(Icon).attrs({
  size: 48,
  color: colors.error,
  name: 'pokemon-go',
})``;

export const BackIcon = styled(FeatherIcons).attrs({
  size: 22,
  color: colors.white,
  name: 'chevron-left',
})`
  margin-right: 8px;
`;

export const SettingsIcon = styled(FeatherIcons).attrs({
  size: 26,
  color: colors.error,
  name: 'settings',
})``;
