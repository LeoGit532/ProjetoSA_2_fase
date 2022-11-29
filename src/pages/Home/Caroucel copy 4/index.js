import React from 'react';
import { FlatList } from 'react-native';
import { Image, Icon,  Buttonwatch, Text, Item, ContainerButtons} from './styles';

import { 
  SafeAreaView, 
  StyleSheet, 
  View, 
  TouchableOpacity, 
} from 'react-native';
const  Caroucelu= ( { list, title } ) => {


 return (
  
    <FlatList
    data={list}
    horizontal
    pagingEnabled
    keyExtractor={(item, index) => `${item}_${index}`}
    renderItem={({ item })=>{

      return (     
         <Item>

        <Image source={{uri: "https://m.media-amazon.com/images/I/51cY0Lsf1DL.jpg"}}/>
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
export default Caroucelu;
