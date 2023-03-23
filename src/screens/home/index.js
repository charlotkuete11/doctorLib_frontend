/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';


const image = { uri: 'https://sahchicago.org/images/departments-services/article-headers/find-a-provider-lrge.jpg' }; // Remplacez l'URL de l'image par celle que vous souhaitez utiliser


const HomeScreen = ({ navigation }) => { 
  return (
    <Container>
      <ImageBg source={image}>
        <Overlay>
          <Button onPress={() => navigation.navigate('Search')}>
            <ButtonText>Commencer</ButtonText>
          </Button>
        </Overlay>
      </ImageBg>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const ImageBg = styled.ImageBackground`
    flex: 1;
    resize: contain;
    width: 100%;
    height: 100%;
`;

const Overlay = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    align-items: center;
    justify-content: center;
`;

const Button = styled.TouchableOpacity`
    background-color: royalblue;
    padding: 10px;
    border-radius: 5px;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export default HomeScreen