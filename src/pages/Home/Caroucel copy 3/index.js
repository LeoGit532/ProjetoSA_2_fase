import React from 'react';
import { FlatList } from 'react-native';
import { Image, Icon,  Buttonwatch, Text, Item, ContainerButtons} from './styles';
const  Caroucele= ( { list } ) => {
 return (
    <FlatList
    data={list}
    horizontal
    pagingEnabled
    keyExtractor={(item, index) => `${item}_${index}`}
    renderItem={({ item })=>{

      return (     
         <Item>

        <Image source={{uri: "https://www.cafecomfilme.com.br/media/k2/items/cache/620ba7bb730e2fa7c5bcf4375653194e_XL.jpg?t=20171108_152038"}}/>
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
export default Caroucele;