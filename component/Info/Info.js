import React from 'react';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { View, Text, SafeAreaView, ScrollView, Linking } from 'react-native';
import { globalColor, globalStyle } from '../../Style';

export default function MyStack() {

    return (
        <View style={{ minHeight: '100%' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={globalStyle.container}>
                        <View style={globalStyle.section}>
                            <Text style={globalStyle.h3}>Présentation </Text>
                            <Text style={globalStyle.text}>
                                Ludeko est une entreprise de l’économie sociale et solidaire qui agit pour la réduction des déchets.
                                Cette application permet de connecter le peson Ludeko au réseau Wi-Fi afin de simplifier le suivi
                                quotidien du poids de déchets. Le peson s’utilise avec votre compte sur la plateforme 
                                <Text onPress={() => Linking.openURL("https://app.ludeko.fr/")} style={{color: globalColor.blue}}> https://app.ludeko.fr </Text>
                                qui permet de visualiser toutes les pesées et l’évolution de la production de
                                déchets
                            </Text>
                        </View>
                        <View style={globalStyle.section}>
                            <Text style={globalStyle.h3}>FAQ </Text>
                            <Collapse style={{ backgroundColor: "#fff", marginBottom: 10, padding: 10 }}>
                                <CollapseHeader>
                                    <Text>Pourquoi mon réseau Wi-Fi n'est pas compatible ?</Text>
                                </CollapseHeader>
                                <CollapseBody style={{ marginTop: 10 }}>
                                    <Text style={globalStyle.text}>
                                        Il existe deux types de réseaux Wi-Fi : 2,4 GHz et 5 GHz. Les pesons, comme bon nombre d'autres
                                        objets Wi-Fi (domotique, imprimantes, ...) ne sont compatibles qu'avec le réseau 2,4 GHz. Les box
                                        internet actuelles ont les deux types de réseaux, mais elles ne les gèrent pas de la même façon et
                                        avec la même transparence. L’application est là pour vous aider à y voir plus clair dans les deux
                                        cas et trouver la solution qui vous convient</Text>
                                </CollapseBody>
                            </Collapse>
                            <Collapse style={{ backgroundColor: "#fff", marginBottom: 10, padding: 10 }}>
                                <CollapseHeader>
                                    <Text>Pourquoi s’éloigner de la box internet ou re-paramétrer le réseau Wi-Fi de la box ?</Text>
                                </CollapseHeader>
                                <CollapseBody style={{ marginTop: 10 }}>
                                    <View>
                                        <Text style={globalStyle.text}>
                                            Vous ne le voyez pas, mais votre box génère deux réseaux différents, avec le même nom
                                            et le même mot de passe, mais de fréquences différentes (voir la question précédente).
                                            Seul l’un des deux est compatible, mais il est impossible de choisir lequel des deux on veut utiliser
                                            depuis le smartphone dans ce type de cas.
                                        </Text>
                                        <Text style={globalStyle.text}>
                                            Pour résoudre ce problème, deux possibilités :
                                        </Text>
                                        <Text style={globalStyle.text}>
                                            - la solution recommandée par les opérateurs internet qui fournissent ces box est de se
                                            connecter à l'interface d'administration de votre box pour y dissocier les deux réseaux.
                                            Il faudra se connecter à l’interface d’administration de votre box internet, puis suivre
                                            leurs instructions
                                        </Text>
                                        <Text style={globalStyle.text}>
                                            - si la solution précédente vous semble trop technique, la méthode « artisanale » consiste à
                                            s’éloigner au maximum de votre box internet afin de privilégier le réseau compatible (c’est
                                            celui des deux qui a la plus grande portée). Vous pourrez voir que vous êtes passé sur le
                                            bon réseau lorsque la mention «Le réseau Wi-Fi actuel n’est pas compatible » disparaitra et
                                            que le champ de mot de passe apparaît
                                        </Text>
                                    </View>
                                </CollapseBody>
                            </Collapse>
                        </View>
                        <View style={globalStyle.section}>
                            <Text style={globalStyle.h3}>CONFIDENTIALITE ET MENTIONS LEGALES</Text>
                            <Text style={globalStyle.link} onPress={() => Linking.openURL("https://app.ludeko.fr/mentions")}>
                                Mentions légales</Text>
                            <Text style={globalStyle.link} onPress={() => Linking.openURL("https://app.ludeko.fr/charte")}>
                                Charte sur le respect de la vie privée</Text>
                        </View>
                        <View style={globalStyle.section}>
                            <Text style={globalStyle.h3}>Contact</Text>
                            <Text style={globalStyle.link} onPress={() => Linking.openURL("mailto:assistant@ludeko.fr")}>
                                assistant@ludeko.fr</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}