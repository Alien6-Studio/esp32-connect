import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { globalStyle } from '../../Style';

export default function Legal({ navigation }) {


    return (
        <View style={{ minHeight: '100%' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={globalStyle.container}>
                        <Text>
                            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie numérique, il est précisé aux utilisateurs du site app.ludeko.fr l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                        </Text>
                        <Text style={globalStyle.h2}>
                            Edition du site
                        </Text>
                        <Text>
                            Le présent site, accessible à l’URL https://app.ludeko.fr (le « Site »), est édité par Ludeko SAS, société au capital de 10000 euros, inscrite au R.C.S. de Pontoise sous le numéro 877 848 309, dont le siège social est situé au 22 bis avenue de la division Leclerc – 95170 Deuil-La Barre, représentée par Fabien Meziere dûment habilité. Le numéro individuel TVA de l’Exploitant est : FR80877848309
                        </Text>
                        <Text style={globalStyle.h2}>
                            Directeur de la publication
                        </Text>
                        <Text>
                            Le directeur de la publication est Fabien Meziere
                        </Text>
                        <Text style={globalStyle.h2}>
                            Nous contacter
                        </Text>
                        <Text>
                            Par email: contact@ludeko.fr
                        </Text>
                        <Text style={globalStyle.h2}>
                            Données personnelles
                        </Text>
                        <Text>
                            Le traitement de vos données à caractère personnel est régi par notre Charte du respect de la vie privée conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 (« RGPD »).
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View >
    )
}

const style = StyleSheet.create({
    title: {

    }
})