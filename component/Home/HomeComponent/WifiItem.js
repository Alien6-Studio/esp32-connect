import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { globalStyle, globalColor } from '../../../Style';

export default function WifiItem(props) {

    const [selected, setSelected] = useState(false);
    const [password, setPassword] = useState("");


    return (
        <View style={style.rowView}>
            <View style={style.infoSectio}>
                <View>
                    <Text style={{ fontSize: 18, color: "#FFF" }}> {props.wifi.SSID} </Text>
                    <Text style={{ fontSize: 8, color: "#FFF" }}> bssid : {props.wifi.BSSID} </Text>
                </View>
                {!selected && (
                    <View>
                        <Button title="Choisir" onPress={() => setSelected(true)} />
                    </View>
                )}
            </View>
            {selected && (
                <View>
                    <TextInput
                        autoCorrect={false}
                        placeholder='Entrer le mot de passe'
                        onChangeText={setPassword}
                        value={password}
                        style={globalStyle.input}
                        placeholderTextColor="#fff"
                        autoCapitalize='none'
                        autoFocus
                    />
                    <Button title="Connexion" onPress={() => props.changeWifi(props.wifi.SSID, password)} />
                </View>
            )}
        </View>
    )
}

const style = StyleSheet.create({
    infoSectio: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rowView: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    }
}); 