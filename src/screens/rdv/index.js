/* eslint-disable prettier/prettier */
import {React, useState} from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native';

const RDV = ({navigation, route}) => {
    const [view1, setView1] = useState(true);
    const [view2, setView2] = useState(false);
    const [userInput, setUserInput] = useState({
        civilite: '',
        nom: '',
        prenom: '',
        email: '',
        phone: '',
        ville: '',
        nomRue: '',
        numRue: null,
        postCode: null
    });
    const [rdvInput, setRdvInput] = useState({
        date: '',
        time: '',
        motif: '',
        details: ''
    })
  return (
    <Container showsVerticalScrollIndicator={false}>
        <Section>
            <ShowHideText> &gt; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Information personnel</ShowHideText>
            <ShowHideView>
                <CustomInput
                    placeholder="Nom"
                    // value={userInput.nom}
                />
                <CustomInput
                    placeholder="Prenom"
                    // value={userInput.prenom}
                />
                <CustomInput
                    placeholder="Email"
                    // value={userInput.email}
                />
                <CustomInput
                    placeholder="Phone"
                    // value={userInput.phone}
                />
                <CustomInput
                    placeholder="Ville"
                    // value={userInput.ville}
                />
            </ShowHideView>
        </Section>
        <Section>
            <ShowHideText> &gt; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Information du rendez-vous</ShowHideText>
            <ShowHideView>
                <CustomInput
                    placeholder="dd/mm/yyyy"
                    // value={rdvInput.date}
                />
                <CustomInput
                    placeholder="HH:mm"
                    // value={rdvInput.time}
                />
                <CustomInput
                    placeholder="Motif"
                    // value={rdvInput.motif}
                />

                <CustomInput
                    placeholder='Details'
                    multiline={true}
                    numberOfLines={5}/>
            </ShowHideView>
        </Section>

        <View style={{marginTop: 20, marginBottom:20}}>
            <OpacityBtn onPress={() => {
                alert("Rendez-vous a été pris")
                navigation.navigate("Search");
            }}>
                <Text style={{color: 'white',textAlign:'center',fontWeight:'bold'}}>Confirmer</Text>
            </OpacityBtn>
        </View>

    </Container>
  )
}

const Container = styled.ScrollView`
    margin-left:7%;
    width:86%;
    margin-top:20px;
`;

const Section = styled.View`
    padding:10px;
`;

const ShowHideText = styled.Text`
    font-style:italic;
    color: black;
`;
const ShowHideView = styled.View`
    background: white;
    margin-top:10px;
    color:black;
    padding: 10px;
`;

const CustomInput = styled.TextInput`
    margin-bottom: 10px;
    padding:10px;
    border: 1px solid lightgray;
`;

const OpacityBtn = styled.TouchableOpacity`
    background-color: royalblue;
    width:70%;
    margin-left:15%;
    padding:12px;
    border-radius: 6px;
`;

export default RDV