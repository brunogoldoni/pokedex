import React from 'react';

import {CardContainer, Name, WrapperIMG, IMGPokemon} from './styles';

interface ICardList {
  onPress(): void,
  name: string,
  imageUrl: any;
}

const CardList = ({onPress, name, imageUrl}: ICardList) => {
  return (
    <CardContainer onPress={onPress}>
      <Name>{name}</Name>
      <WrapperIMG>
        <IMGPokemon source={{uri: imageUrl}} />
      </WrapperIMG>
    </CardContainer>
  );
};

export default CardList;
