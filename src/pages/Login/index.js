import React , {useState} from 'react';
import { Container, Logo, ImageBackground, Input,  ContainerInput, Button, Text, ContainerTexts, Form } from './styles';
import logo from '../../assets/logo.png';
import imageBackground from '../../assets/login.jpg'


const Login = ({ navigation} ) => {

    const handlelogin = () => {
      navigation.replace('Home')
    }

    const handleForgetPassWord = () => {
        alert('Forget Pasword');
    }

    const handleCreateAccount = () => {
        alert('Create Account');
    }
return (
    <ImageBackground source={imageBackground}>
    <Container>
        <Logo source={logo}/>
        
<Form>
        <ContainerInput>
       <Input placeholder="E-mail" placeholderTextColor="white"/>
       </ContainerInput>
       <ContainerInput>
       <Input label='password'placeholder="Senha"
       secureTextEntry={true} placeholderTextColor="white"  />
       
       </ContainerInput>
        <Button onPress={handlelogin}>
            <Text>LOGIN</Text>
        </Button>
        <ContainerTexts>
        <Text onPress={handleForgetPassWord}>Esqueceu a senha? </Text>
        <Text>|</Text>
        <Text onPress={handleCreateAccount}> Cadastrar conta</Text>
        </ContainerTexts>
</Form>
       </Container>
 </ImageBackground>
);
}

export default Login