/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native';


const image = { uri: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000' }

const DetailScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
        <Header>
            <UserImg source={image}/>
            <BoldText>{`${route.params.data.specialite}`}</BoldText>
            <OrdinaryText>{`${route.params.data.civilite} ${route.params.data.prenom} ${route.params.data.nom}`}</OrdinaryText>
        </Header>
        <View style={{marginTop: -23}}>
            <OpacityBtn onPress={() => navigation.navigate("Prendre rendez-vous", {doctorId: route.params.data._id})}>
                <Text style={{color: 'white',textAlign:'center',fontWeight:'bold'}}>PRENDRE RENDEZ-VOUS</Text>
            </OpacityBtn>
        </View>
        <BodyView>
            <Text style={{fontWeight:'bold', color:'black', textAlign:'center', fontSize: 17}}>Informations</Text>
            <View style={{marginTop: 10}}>
                <BodyText>{`${route.params.data.nomEtablissement}`}</BodyText>
                <BodyText>{`${route.params.data.email}`}</BodyText>
                <BodyText>{`${route.params.data.honoraire}€ / consultation`}</BodyText>
            </View>
            <View style={{marginTop: 10}}>
                <BodyText>{`${route.params.data.addresse.numeroRue} ${route.params.data.addresse.nomRue}`}</BodyText>
                <BodyText>{`${route.params.data.addresse.postCode} ${route.params.data.addresse.ville}`}</BodyText>
                <BodyText>{`${route.params.data.addresse.pays}`}</BodyText>
            </View>
        </BodyView>
    </SafeAreaView>
  )
}

const Header = styled.View`
    padding-bottom:45px;
    padding-top:10px;
    background-color: white;
`;
const UserImg = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 30px;
    margin-left:30%;
`;

const BoldText = styled.Text`
    font-weight: bold;
    color:black;
    font-size: 20px;
    margin-top:12px;
    text-align: center;
`;

const OrdinaryText = styled.Text`
    color:black;
    font-size: 16px;
    margin-top:7px;
    text-align: center;
`;

const OpacityBtn = styled.TouchableOpacity`
    background-color: royalblue;
    width:90%;
    margin-left:5%;
    padding:12px;
    border-radius: 6px;
`;


const BodyView = styled.View`
    width:90%;
    margin-left:5%;
    background-color: white;
    border-radius: 10px;
    margin-top:30px;   
    padding:15px; 
`;

const BodyText = styled.Text`
    color: black;
    margin-bottom: 7px;
    font-size: 15px;
`;

export default DetailScreen