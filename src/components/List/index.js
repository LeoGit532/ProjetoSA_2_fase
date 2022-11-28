import React from 'react';
import { View } from 'react-native';
import { ContainerItem, Text, Image } from 'react-native';
import { FlatList } from 'react-native';

const List= ({ list}) => {
 return <>
 
 <Text>Filmes de Ação</Text>
          <FlatList 
          data={list}
          keyExtractor={(item, index)=> `${index}`}
          horizontal
          style={{marginTop: 10}}
          renderItem={({item})=> {
            return(<ContainerItem>
              <Image source={{
                uri: "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
            }}
            />
          </ContainerItem>)
          }}
          />
 
 
 
 
 
 
 
 </>
}
export default List;