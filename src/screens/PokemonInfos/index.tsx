import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {BackIcon, PokeballInfos} from '../icons';

import api from '../../services/api';

import {useAlert} from '../../context/AlertContext';
import {Loading} from '../../components';

import { IPokemonInfos } from '../../interfaces/pokemon';

import {
  Scroll,
  Content,
  IMGInfosPokemon,
  Name,
  Footer,
  WrapperSkillsText,
  WrapperItems,
  WrapperPokeball,
  SkillsTitle,
  SkillsText,
} from './styles';
import {
  Container ,
  Header,
  GOBackButtonContainer,
  GOBackButtonContent,
  GOBackText
} from '../styles';

const PokemonInfos = () => {
  const navigation = useNavigation();
  const { AlertService } = useAlert();

  const route = useRoute();
  const {name, pokemonImage} = route.params as any;

  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<IPokemonInfos>();

  const getPokemon = async () => {
    setIsLoading(true);

    try {
      const {data} = await api.get(`/pokemon/${name}`);

      setPokemon(data);
    } catch (err) {
      AlertService.error('Erro ao buscar dados, tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Container>
      <Header>
        <GOBackButtonContainer onPress={() => navigation.goBack()}>
          <GOBackButtonContent>
            <BackIcon />
            <GOBackText>voltar</GOBackText>
          </GOBackButtonContent>
        </GOBackButtonContainer>
      </Header>

      {isLoading ? (
        <Loading size="large" />
      ) : (
        <Scroll>
          <Content>
            {pokemon && pokemonImage && (
              <IMGInfosPokemon source={{uri: pokemonImage}} />
            )}

            {pokemon && pokemon?.name && <Name>{pokemon?.name}</Name>}
          </Content>

          <Footer>
            <WrapperSkillsText>
              <WrapperItems>
                <WrapperPokeball>
                  <PokeballInfos />
                </WrapperPokeball>
                <SkillsTitle>
                  Tipo:{' '}
                  {pokemon && pokemon?.types[0]?.type.name && (
                    <SkillsText>{pokemon?.types[0]?.type.name}</SkillsText>
                  )}
                </SkillsTitle>
              </WrapperItems>

              <WrapperItems>
                <WrapperPokeball>
                  <PokeballInfos />
                </WrapperPokeball>
                <SkillsTitle>
                  Peso:{' '}
                  {pokemon && pokemon?.weight && (
                    <SkillsText>{pokemon?.weight} kg</SkillsText>
                  )}
                </SkillsTitle>
              </WrapperItems>

              <WrapperItems>
                <WrapperPokeball>
                  <PokeballInfos />
                </WrapperPokeball>
                <SkillsTitle>
                  Índice de jogo:{' '}
                  {pokemon && pokemon?.game_indices[0]?.game_index && (
                    <SkillsText>
                      {pokemon?.game_indices[0]?.game_index}
                    </SkillsText>
                  )}
                </SkillsTitle>
              </WrapperItems>

              <WrapperItems>
                <WrapperPokeball>
                  <PokeballInfos />
                </WrapperPokeball>
                <SkillsTitle>
                  Habilidade:{' '}
                  {pokemon && pokemon?.abilities[0]?.ability?.name && (
                    <SkillsText>
                      {pokemon?.abilities[0]?.ability?.name}
                    </SkillsText>
                  )}
                </SkillsTitle>
              </WrapperItems>
            </WrapperSkillsText>
          </Footer>
        </Scroll>
      )}
    </Container>
  );
};

export default PokemonInfos;
