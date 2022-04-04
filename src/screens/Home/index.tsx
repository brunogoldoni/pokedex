import React, { useState, useEffect, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';

import api from '../../services/api';

import { useAlert } from '../../context/AlertContext';
import { CardList, EmptyComponent } from '../../components';

import { PokemonGO } from '../icons';

import { IPokemon } from '../../interfaces/pokemon';

import {
	WrapperGrettings,
	GrettingsText,
	WrapperItems,
	WrapperTitle,
	Title,
	WrapperPokemonGO,
	WrapperList,
	List
} from './styles';
import { Container, Content, UserName } from '../styles';

const Home = () => {
	const navigation = useNavigation();
	const { AlertService } = useAlert();

	const { userName } = useSelector((state) => state.user);

	const limitPagination = 20;

	const [page, setPage] = useState(0);
	const [grettings, setGrettings] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
	const [isLastPage, setIsLastPage] = useState(false);

	const getAllPokemons = async (offset: any) => {
		setIsLoading(true);
		setPage(offset);

		try {
			const { data } = await api.get(`/pokemon?offset=${offset}&limit=${limitPagination}`);

			if (data) {
				setIsLastPage(!data.next);

				const _pokemons = [];

				for await (const _pokemon of data.results) {
					const pokemonImage = (await api.get(_pokemon.url)).data.sprites.front_default;

					_pokemons.push({ ..._pokemon, pokemonImage });
				}

				if (offset === 0) {
					setPokemonList(_pokemons);
				} else {
					setPokemonList(pokemonList.concat(_pokemons));
				}
			}
		} catch (err) {
			AlertService.error('Erro ao buscar dados, tente novamente mais tarde.');
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
		const currentHour = new Date().getHours();

		if (currentHour < 12) {
			setGrettings('Bom dia,');
		} else if (currentHour >= 12 && currentHour < 18) {
			setGrettings('Boa tarde,');
		} else {
			setGrettings('Boa noite,');
		}
	}, []);

	const PokemonItems = useMemo(
		() => ({ item }: any) => {
			const { name, url, pokemonImage } = item.item;

			return (
				<CardList
					name={name}
					imageUrl={pokemonImage}
					onPress={() => navigation.navigate('PokemonInfos', { name, url, pokemonImage })}
				/>
			);
		},
		[pokemonList]
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
						<Title>ao mundo Pokémon.</Title>
					</WrapperTitle>
					<WrapperPokemonGO onPress={() => navigation.navigate('Profile')}>
						<PokemonGO />
					</WrapperPokemonGO>
				</WrapperItems>

				{
					<WrapperList>
						<List
							data={pokemonList}
							onEndReachedThreshold={1}
							onEndReached={() => onEndReached()}
							showsVerticalScrollIndicator={false}
							keyExtractor={(item, index) => index.toString()}
							renderItem={(item) => <PokemonItems item={item} />}
							ListEmptyComponent={<EmptyComponent message="Não foi possível listar os Pokémons" />}
							refreshControl={
								<RefreshControl refreshing={isLoading} onRefresh={() => getAllPokemons(0)} />
							}
						/>
					</WrapperList>
				}
			</Content>
		</Container>
	);
};

export default Home;
