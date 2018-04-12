import React from 'react';
import {View, Text} from 'react-native';
import {graphql, createFragmentContainer} from 'react-relay'
import styled from 'styled-components';
import {Icon} from 'react-native-elements';

const PetContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  background-color: rgb(246,246,246);
  padding: 10px;
`;

const IconPetContainer = styled(View)`
  flex: 1; 
  justify-content: center;
  align-content: center;
`;

const InfoPetContainer = styled(View)`
  flex: 2;
  flex-direction: column;
`;

const NameText = styled(Text)`
  flex: 1;
  font-family: 'Verdana';
  font-size: 18; 
  `
;
type Props = {
  pet: Pet_pet
}

const getIconName = animal => animal === 'Cat' ?
  <Icon name='cat' type='material-community' size={40} color={'#555'}/> :
  <Icon name='guide-dog' type='foundation' size={45} color={'brown'}/>;

  const ageString = age => age > 1 ? 'anos' : 'ano';

class Pet extends React.Component<Props> {

  render() {
    const {name, breed, age, animal} = this.props.pet;

    return (
      <PetContainer>
        <IconPetContainer>
          {getIconName(animal)}
        </IconPetContainer>
        <InfoPetContainer>
          <NameText>{name}</NameText>
          <Text>{`${age} ${ageString(age)}, ${breed}`}</Text>
        </InfoPetContainer>
      </PetContainer>
    )
  }
}

export default createFragmentContainer(
  Pet,
  graphql`
      fragment Pet_pet on Pet{
          name
          breed
          age
          animal
      }
  `
)

