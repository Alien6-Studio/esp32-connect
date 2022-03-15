import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Button } from 'react-native';
import { Link } from '@react-navigation/native';
import { globalColor, globalStyle } from '../../Style';

export default function About({ navigation }) {

    return (
        <View style={{ minHeight: '100%' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={globalStyle.container}>
                        <Text style={globalStyle.h2}>LUDEKO, UNE ENTREPRISE DE L'ECONOMIE SOCIALE ET SOLIDAIRE</Text>
                        <Text style={globalStyle.text}>
                            Vers un monde qui utilise les ressources communes de façon pertinente et durable. Telle est la vocation de Ludeko. Dit autrement : agir pour mieux vivre maintenant et dans les prochaines décennies.
                        </Text>
                        <Text style={globalStyle.text}>
                            Si l’objectif est sérieux, la démarche se veut plus légère. Oui à de l’information pertinente et fiable, sans tomber dans l’excès anxiogène. Ludeko adopte une approche pragmatique et ludique, parce que nous pensons que c’est le meilleur moyen d’apprendre et de changer ses habitudes.
                        </Text>
                        <Text style={globalStyle.text}>
                            Le premier défi auquel s’attaque Ludeko est celui de la réduction des déchets ménagers, et plus généralement favoriser l’économie circulaire et participer à l’essor du commerce local et à la relocalisation.
                        </Text>
                    </View>
                    <View style={globalStyle.container}>
                        <Text style={globalStyle.h2}> Sections :</Text>
                        <Link to={{ screen: "Charte du respect de la vie privée" }} style={{ color: globalColor.blue, marginVertical: 10 }}> Charte du respect de la vie privée </Link>
                        <Link to={{ screen: "Mentions légales" }} style={{ color: globalColor.blue, marginVertical: 10 }}> Mentions légales </Link>
                        <Link to={{ screen: "FAQ" }} style={{ color: globalColor.blue, marginVertical: 10 }}> FAQ </Link>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

