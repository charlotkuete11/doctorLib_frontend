/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const datas = [
    {
        "addresse": {
            "pays": "USA",
            "ville": "New York",
            "nomRue": "Broadway",
            "numeroRue": 123,
            "postCode": 10001
        },
        "_id": "641b86a8c73e44572bbd6097",
        "nom": "Smith",
        "prenom": "John",
        "civilite": "Mr",
        "email": "john.smith@example.com",
        "password": "$2b$10$Evzi6h7Z5OILSKuvOb6j3.2Uk3zWATEDl7fDfO1vwGp2WjlZ/IrQW",
        "phoneNumber": "1234567890",
        "specialite": "Cardiology",
        "nomEtablissement": "New York Hospital",
        "honoraire": 200,
        "patientComments": [],
        "createdAt": "Wed Mar 22 2023 23:52:24 GMT+0100 (heure normale d’Europe centrale)",
        "lastConnexion": "Wed Mar 22 2023 23:52:24 GMT+0100 (heure normale d’Europe centrale)",
        "__v": 0
    },
    {
        "addresse": {
            "pays": "Spain",
            "ville": "Barcelona",
            "nomRue": "Rambla",
            "numeroRue": 456,
            "postCode": 78001
        },
        "_id": "641b8717c73e44572bbd6099",
        "nom": "Garcia",
        "prenom": "Maria",
        "civilite": "Mme",
        "email": "maria.garcia@example.com",
        "password": "$2b$10$6LVUwnshcS8AA6hsEoFwxOumWoY1OX2BjzVx8YLBdklLFoy2qHdti",
        "phoneNumber": "0987654321",
        "specialite": "Dermatology",
        "nomEtablissement": "Barcelona Clinic",
        "honoraire": 150,
        "patientComments": [],
        "createdAt": "Wed Mar 22 2023 23:54:15 GMT+0100 (heure normale d’Europe centrale)",
        "lastConnexion": "Wed Mar 22 2023 23:54:15 GMT+0100 (heure normale d’Europe centrale)",
        "__v": 0
    },
    {
        "addresse": {
            "pays": "France",
            "ville": "Paris",
            "nomRue": "Rue de Rivoli",
            "numeroRue": 1,
            "postCode": 75001
        },
        "_id": "641b877dc73e44572bbd609f",
        "nom": "Smith",
        "prenom": "John",
        "civilite": "Mr",
        "email": "john.smith1@example.com",
        "password": "$2b$10$Jr2TGcA59WccmaQKzeAVDeFJOCKmPTwGFPxtHkFAO.86koS1LTT96",
        "phoneNumber": "1234567890",
        "specialite": "Cardiology",
        "nomEtablissement": "New York Hospital",
        "honoraire": 200,
        "patientComments": [],
        "createdAt": "Wed Mar 22 2023 23:55:57 GMT+0100 (heure normale d’Europe centrale)",
        "lastConnexion": "Wed Mar 22 2023 23:55:57 GMT+0100 (heure normale d’Europe centrale)",
        "__v": 0
    },
    {
        "addresse": {
            "pays": "France",
            "ville": "Paris",
            "nomRue": "Avenue des Champs-Élysées",
            "numeroRue": 100,
            "postCode": 75008
        },
        "_id": "641b87fec73e44572bbd60a1",
        "nom": "Azoulou",
        "prenom": "Maria",
        "civilite": "Mme",
        "email": "maria.azoulou@example.com",
        "password": "$2b$10$vz6lUQDyh0v59Q7cMji0yulTB5Yv3JgWwwKcR8XsC6efdPvDYptBi",
        "phoneNumber": "0934564321",
        "specialite": "Dentiste",
        "nomEtablissement": "Clinic la victoire",
        "honoraire": 150,
        "patientComments": [],
        "createdAt": "Wed Mar 22 2023 23:58:06 GMT+0100 (heure normale d’Europe centrale)",
        "lastConnexion": "Wed Mar 22 2023 23:58:06 GMT+0100 (heure normale d’Europe centrale)",
        "__v": 0
    }
]

const SearchScreen = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
    
    // const uri = 'http://localhost:4001/api/v1/doctors/';
    // const config = {
    //     headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //         "Accept": "application/json",
    //     }
    //   };

    useEffect(() => {
        setData(datas);
    }, []);

    const handleSearch = () => {

        let toSend = data.filter(docteur => {
            if(docteur['nom'].includes(searchText) || docteur['prenom'].includes(searchText) || docteur['addresse']['ville'] == searchText || docteur['nomEtablissement'] == searchText){
               return docteur;
            }
        })
        navigation.navigate("Search Result", {data: toSend});
    };
    return (
        <Container>
            <SearchInput
                placeholder="Nom, Ville, Nom de l'établissement"
                onChangeText={setSearchText}
                value={searchText}
            />
            <Button
                title="Rechercher"
                onPress={handleSearch}
                color="royalblue"
            />
        </Container>
    )
}
const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const SearchInput = styled.TextInput`
    width: 80%;
    height: 40px;
    border-color: gray;
    border-width: 1px;
    padding: 10px;
    margin-bottom: 20px;
`;

export default SearchScreen;

