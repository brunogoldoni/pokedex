/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RefreshControl} from 'react-native';
import {useSelector} from 'react-redux';

import api from '../../services/api';

import {useAlert} from '../../context/AlertContext';
import {CardList, EmptyComponent, Loading} from '../../components';

import {PokemonGO} from '../icons';

import {
  Content,
  WrapperGrettings,
  GrettingsText,
  UserName,
  WrapperItems,
  WrapperTitle,
  Title,
  WrapperList,
  List,
} from './styles';
import {Container} from '../styles';

const Home = () => {
  const navigation = useNavigation();
  const { AlertService } = useAlert();

  const {userName} = useSelector(state => state.user);

  const limitPagination = 20;

  const [page, setPage] = useState(0);
  const [grettings, setGrettings] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  const getAllPokemons = async (offset: any) => {
    setIsLoading(true);
    setPage(offset);

    try {
      const {data} = await api.get(
        `/pokemon?offset=${offset}&limit=${limitPagination}`,
      );

      if (data) {
        setIsLastPage(!data.next);

        if (offset === 0) {
          setPokemonList(data.results);
        } else {
          setPokemonList(pokemonList.concat(data.results));
        }
      }
    } catch (err: any) {
      AlertService.error('Erro ao buscar dados, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const onEndReached = () => {
    if (!isLastPage) {
      getAllPokemons(page + limitPagination);
    }
  };

  useEffect(() => {
    getAllPokemons(0);
  }, []);

  useEffect(() => {
    const currentHour = String(new Date().getHours());

    if (currentHour < 12) {
      setGrettings('Bom dia,');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGrettings('Boa tarde,');
    } else {
      setGrettings('Boa noite,');
    }
  }, []);

  const PokemonItems = useMemo(
    () =>
      ({item}: any) => {
        const {name, url} = item.item;

        const pokemonNumber = url
          .replace('https://pokeapi.co/api/v2/pokemon/', '')
          .replace('/', '');

        const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png`;

        return (
          <CardList
            name={name}
            imageUrl={imageUrl}
            onPress={() => navigation.navigate('PokemonInfos', {name, url})}
          />
        );
      },
    [pokemonList],
  );

  return (
    <Container>
      <Content>
        <WrapperGrettings>
          <GrettingsText>{grettings} </GrettingsText>
          <UserName>{userName}.</UserName>
        </WrapperGrettings>

        <WrapperItems>
          <WrapperTitle>
            <Title>Seja Bem-Vindo,</Title>
            <Title>ao Mundo Pokémon.</Title>
          </WrapperTitle>
          <PokemonGO />
        </WrapperItems>

        {isLoading ? (
          <Loading size="large" />
        ) : (
          <WrapperList>
            <List
              data={pokemonList}
              onEndReachedThreshold={1}
              onEndReached={() => onEndReached()}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={item => <PokemonItems item={item} />}
              ListEmptyComponent={
                <EmptyComponent message="Não foram encontrados Pokémons" />
              }
              refreshControl={
                <RefreshControl
                  refreshing={isLoading}
                  onRefresh={() => getAllPokemons(0)}
                />
              }
            />
          </WrapperList>
        )}
      </Content>
    </Container>
  );
};

export default Home;
