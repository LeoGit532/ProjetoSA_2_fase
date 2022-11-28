import styled from 'styled-components/native';

export const Container = styled.View`
 background-color: rgba(0, 0, 0, 0.7);
 flex: 1;
 justify-content: center;
 align-items: center
`;

export const Logo = styled.Image`
 width: 100%;
 height: 28%;
 margin-bottom: 150px;
`;

export const ImageBackground = styled.ImageBackground.attrs({

})`
flex: 1;

`;

export const ContainerInput = styled.View`
width: 100%;
background-color: #333333;
margin-bottom: 10px;
border-radius: 9px;
`;

export const Input = styled.TextInput`
widht: 100%;
height: 45px;
padding-horizontal: 10px;
color: white;
`;

export const Button = styled.TouchableOpacity`
 width: 100%;
 height: 40px;
 border-radius: 8px;
 border-width: 0.5px;
 border-color: white;
 justify-content: center;
 align-items: center;
 margin-top: 30px;

`;

export const Text = styled.Text`
  color: white;
  font-size: 16px;
`;

export const ContainerTexts = styled.View`
margin-top: 50px;
width: 100%;
flex-direction: row;
justify-content: space-evenly;
`;

export const Form = styled.View`
width: 80%;
position: absolute;
bottom: 100px;
`;