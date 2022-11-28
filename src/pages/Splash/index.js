import React, { useEffect } from 'react'
import { Container, Logo, ImageBackground } from './styles';
import logo from '../../assets/logo.png';
import imageBackground from '../../assets/splash.png'

const Splash = ( {navigation} ) => {
const handleLogin = () => {
 navigation.navigate('Login')
}

useEffect(()=> {
    setTimeout(()=>{
    handleLogin();
    }, 1500);
    })

  return (
    <Container>
        <Logo source={logo}/>
        <ImageBackground source={imageBackground}/>
    </Container>
  );
};

export default Splash