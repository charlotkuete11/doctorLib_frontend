/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View, SafeAreaView  } from 'react-native';
import { ActivityIndicator } from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicator';
import styled from 'styled-components/native';

const image = { uri: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000' }

const Results = ({navigation, route}) => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Details', {data: item})
                } key={item && item._id}>
                <Container>
                    <UserImg source={image}/>
                    <Div>
                        <BoldText>{item && `${item.specialite}`}</BoldText>
                        <OrdinaryText>{item && `${item.civilite} ${item.prenom} ${item.nom}`}</OrdinaryText>
                        <OrdinaryText>{item && `${item.honoraire}€ `}</OrdinaryText>
                    </Div>
                </Container>
            </TouchableOpacity>
        )
    }
    const renderFooter = () => {
        return (
            <renderFooterView>
                <ActivityIndicator animating size="large"/>
            </renderFooterView>
        )
    }
  return (
    <SafeAreaView>
        <List
            showsVerticalScrollIndicator={false}
            data={route.params.data}
            renderItem = {renderItem}
            keyExtractor={item => {item && item._id}}
            ListFooterComponent={() => renderFooter}
            ListEmptyComponent = {()=> <Text>No data present</Text>}
        />
    </SafeAreaView>
  )
}

const List = styled.FlatList`
    margin: 20px;
`;
const Container = styled.View`
    margin-bottom: 10px;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
`;

const UserImg = styled.Image`
    width: 70px;
    height: 85px;
    border-radius: 10px;
    margin-right:10px;
`;

const Div = styled.View`
    
`;

const BoldText = styled.Text`
    font-weight: bold;
    color: royalblue;
    font-size: 18px;
`;

const OrdinaryText = styled.Text`
    font-size: 16px;
    margin-top:7px;
`;

const renderFooterView = styled.View`
    padding-top: 20px ;
    border-top-width: 1px;
    border-top-color: #ced0ce;
`;


export default Results