import React from 'react';

import {CardContainer, Name, WrapperIMG, IMGPokemon} from './styles';

const CardList = ({onPress, name, imageUrl}) => {
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
