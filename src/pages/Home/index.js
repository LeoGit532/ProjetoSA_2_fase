import React, {useEffect, useState} from 'react';
import { Container, ContainerCaroucel, Text, ContainerList } from './styles';
import Caroucel from './Caroucel'
import Caroucelo from './Caroucel copy';
import Caroucela from './Caroucel copy 2';
import Caroucele from './Caroucel copy 3';
import Caroucelu from './Caroucel copy 4';
import List from "../../components/List"
import api from '../../services/api';

const apiKey = '6b24507609c0088f6662b28444b73ba7'
const language= 'language-pt-BR';

const Home = () => {
  const [listTrending, setListTrending] = useState([])
  const lista = [0,1,2,3,6]
  const init = async () =>{
    const response = await api.get(`/trending/movie/week/?${apiKey}&${language}&page=${1}`)
    setListTrending(response.data.results)
  }
  useEffect(()=>{ 
    init();
  }, []);

  return (
    <Container>
        <ContainerCaroucel>
         
          <Caroucel list={lista}/>
          <Text>FILMES DE FICÇÃO</Text>
          <Caroucelo list={lista}/>
          <Text>FILMES DE TERROR</Text>
          <Caroucela list={lista}/>
          <Text>FILMES DE COMÉDIA</Text>
          <Caroucele list={lista}/>
          <Text>FILMES DE AÇÃO</Text>
          <Caroucelu list={lista}/>
          <Text>FILMES NACIONAIS</Text>
         </ContainerCaroucel>
        {  <ContainerList>
    
          </ContainerList>}

  </Container>
  );
            
};

export default Home
