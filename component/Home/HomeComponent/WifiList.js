import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import { Link } from '@react-navigation/native';
import WifiManager from "react-native-wifi-reborn";
import { globalColor } from '../../../Style';
import WifiItem from './WifiItem';

export default function WifiList(props) {

    const [wifis, setWifis] = useState([]);
    const [isDualBand, setIsDualBand] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getWifis();
    }, []);

    const reset = async () => {
        await props.getCurrentWifi();
        await getWifis();
    }


    const getWifis = async () => {
        setLoading(true);
        try {
            const data = await WifiManager.reScanAndLoadWifiList();
            setIsDualBand(data.find(w => w.SSID === props.currentWifi.SSID && w.frequency < 3000) !== undefined);
            const validWifi = data.filter(w => w.frequency < 3000 && !data.find(d => d.SSID === w.SSID && d.frequency > 3000))
            setWifis(validWifi);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }

    return (
        <View>
            <Button onPress={reset} title='Actualiser' />
            {isDualBand ? (
                <View>
                    <Text style={{ color: globalColor.red, marginBottom: 10 }}>
                        Le réseau Wi-Fi actuel n’est pas compatible, Si vous souhaitez utiliser ce réseau, 
                        éloignez-vous au maximum de votre box internet ou paramétrez les réseaux Wi-Fi sur l’interface 
                        de votre box</Text>
                    <Link to={{
                        screen: 'Information', initial: true, params: { screen: 'FAQ', initial: false }
                    }}
                        style={{ color: globalColor.blue, marginBottom: 10 }}>
                        Explication</Link>
                </View>
            ) : loading ? (
                <Text style={{ color: globalColor.red, marginBottom: 10 }}>Le réseau Wi-Fi actuel n’est pas compatible, Analyse des solutions en cours</Text>
            ) : (
                <Text style={{ color: globalColor.red, marginBottom: 10 }}>Le réseau Wi-Fi actuel n’est pas compatible, Connectez-vous à l’un des réseaux compatibles suivants: </Text>
            )}
            {loading && (
                <View style={{ padding: 40 }}>
                    <ActivityIndicator color={globalColor.green} size="large" animating />
                </View>
            )}
            <View style={{ backgroundColor: "#3f555f" }}>
                {wifis.map((wifi, i) => <WifiItem key={i} wifi={wifi} changeWifi={props.changeWifi} />)}
            </View>
            <Link to={{
                screen: 'Information', initial: true, params: { screen: 'FAQ', initial: false }
            }}
                style={{ color: globalColor.blue, marginVertical: 10 }}>
                pourquoi mon réseau wifi n'est pas compatible ?
            </Link>
        </View >
    )
}

