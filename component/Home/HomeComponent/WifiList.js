import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import { Link } from '@react-navigation/native';
import WifiManager from "react-native-wifi-reborn";
import { globalColor } from '../../../Style';
import WifiItem from './WifiItem';

const WIFIS = [
    {
        SSID: "AndroidWifi",
        BSSID: "02:15:b2:00:01:00",
        frequency: 2447,
        level: -30,
    },
    {
        SSID: "AndroidWifi",
        BSSID: "02:15:b2:00:01:00",
        frequency: 5000,
        level: -30,
    },
    {
        SSID: "AndroidWifi2",
        BSSID: "02:15:b2:00:01:01",
        frequency: 5000,
        level: -30,
    },
    {
        SSID: "AndroidWifi2",
        BSSID: "02:15:b2:00:01:01",
        frequency: 2400,
        level: -30,
    },
    {
        SSID: "AndroidWifi3",
        BSSID: "02:15:b2:00:01:02",
        frequency: 2447,
        level: -30,
    },
    {
        SSID: "AndroidWifi4",
        BSSID: "02:15:b2:00:01:03",
        frequency: 2447,
        level: -30,
    },
    {
        SSID: "AndroidWifi5",
        BSSID: "02:15:b2:00:01:03",
        frequency: 5000,
        level: -30,
    }
];

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
            setIsDualBand(data.find(w => w.SSID === props.currentWifi.SSID && w.frequency < 3000) !== null);
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
                <Text style={{ color: globalColor.red, marginBottom: 10 }}>Vous êtes connecté sur un réseau dual bande, choisissez un de ces réseaux compatible où éloignez-vous suffisamment de votre box internet  </Text>
            ) : (
                <Text style={{ color: globalColor.red, marginBottom: 10 }}>Votre réseau Wi-fi n'est pas compatible, viellez choisir un de ces réseaux: </Text>
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
                style={{ color: globalColor.white, marginVertical: 10 }}>
                pourquoi mon réseau wifi n'est pas compatible ?
            </Link>
        </View >
    )
}

