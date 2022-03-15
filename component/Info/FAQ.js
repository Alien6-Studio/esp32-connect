import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { globalStyle } from '../../Style';


export default function FAQ() {


    return (
        <View style={{ minHeight: '100%' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={globalStyle.container}>
                        <Collapse  style={{backgroundColor: "#fff", marginBottom: 10, padding: 10}}>
                            <CollapseHeader>
                                <Text>Pourquoi mon réseau wifi n'est pas compatible ?</Text>
                            </CollapseHeader>
                            <CollapseBody style={{marginTop: 10}}>
                                <Text>A ajouter</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse style={{backgroundColor: "#fff", marginBottom: 10, padding: 10}}>
                            <CollapseHeader>
                                <Text>Comment puis-je configurer mon retour pour le rendre compatible ?</Text>
                            </CollapseHeader>
                            <CollapseBody style={{marginTop: 10}}>
                                <Text>A ajouter </Text>
                            </CollapseBody>
                        </Collapse>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}