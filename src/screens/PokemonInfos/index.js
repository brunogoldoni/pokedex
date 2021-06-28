import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {BackIcon, PokeballInfos} from '../icons';

import api from '../../services/api';

import {useAlert} from '../../context/AlertContext';
import {Loading} from '../../components';

import {Container} from '../styles';
import {
  Header,
  GOBackButtonContainer,
  GOBackButtonContent,
  GOBackText,
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

const PokemonInfos = () => {
  const navigation = useNavigation();
  const {AlertService} = useAlert();

  const route = useRoute();
  const {name, url} = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    setIsLoading(true);

    try {
      const {data} = await api.get(`/pokemon/${name}`);

      const pokemonNumber = url
        .replace('https://pokeapi.co/api/v2/pokemon/', '')
        .replace('/', '');

      const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png`;

      const _data = {
        imageUrl,
        infos: data,
      };

      setPokemon(_data);
    } catch (err) {
      AlertService.error('Erro ao buscar dados, tente novamente.');
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
            {pokemon && pokemon.imageUrl && (
              <IMGInfosPokemon source={{uri: pokemon.imageUrl}} />
            )}

            {pokemon && pokemon.infos.name && <Name>{pokemon.infos.name}</Name>}
          </Content>

          <Footer>
            <WrapperSkillsText>
              <WrapperItems>
                <WrapperPokeball>
                  <PokeballInfos />
                </WrapperPokeball>
                <SkillsTitle>
                  Tipo:{' '}
                  {pokemon && pokemon.infos.types[0].type.name && (
                    <SkillsText>{pokemon.infos.types[0].type.name}</SkillsText>
                  )}
                </SkillsTitle>
              </WrapperItems>

              <WrapperItems>
                <WrapperPokeball>
                  <PokeballInfos />
                </WrapperPokeball>
                <SkillsTitle>
                  Peso:{' '}
                  {pokemon && pokemon.infos.weight && (
                    <SkillsText>{pokemon.infos.weight} kg</SkillsText>
                  )}
                </SkillsTitle>
              </WrapperItems>

              <WrapperItems>
                <WrapperPokeball>
                  <PokeballInfos />
                </WrapperPokeball>
                <SkillsTitle>
                  Índice de jogo:{' '}
                  {pokemon && pokemon.infos.game_indices[0].game_index && (
                    <SkillsText>
                      {pokemon.infos.game_indices[0].game_index}
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
                  {pokemon && pokemon.infos.abilities[0].ability.name && (
                    <SkillsText>
                      {pokemon.infos.abilities[0].ability.name}
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
