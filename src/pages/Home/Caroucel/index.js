import React from 'react';
import { FlatList } from 'react-native';
import { Image, Icon,  Buttonwatch, Text, Item, ContainerButtons} from './styles';
const  Caroucel= ( { list } ) => {
 return (
    <FlatList
    data={list}
    horizontal
    pagingEnabled
    keyExtractor={(item, index) => `${item}_${index}`}
    renderItem={({ item })=>{

      return (     
         <Item>

        <Image source={{uri: "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"}}/>
        <ContainerButtons>
        <Icon name="share" size={40} color="white" />
        <Buttonwatch>
        <Icon name="controller-play" size={20} color="black" style={{marginRight: 5}} />
       <Text>Assistir</Text>
        </Buttonwatch>
        <Icon name="info-with-circle" size={40} color="white" />
        </ContainerButtons>
        </Item>)
    }}
    />
  );
};
export default Caroucel;