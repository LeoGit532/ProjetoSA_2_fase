import React from 'react';
import { Container, ContainerCaroucel, ContainerItem, Image, Text, ContainerList } from './styles';
import Caroucel from './Caroucel'

import List from "../../components/List"
const Home = () => {
  const lista = [0,1,2,3, 6]
  return (
    <Container>
        <ContainerCaroucel>
          <Caroucel list={lista}/>
         </ContainerCaroucel>
          <ContainerList>
            <List lista={lista}/>
          </ContainerList>

  </Container>
  );
            
};

export default Home
