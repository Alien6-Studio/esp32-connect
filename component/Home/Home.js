import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    Dimensions,
    PermissionsAndroid,
    Image,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import WifiManager from "react-native-wifi-reborn";
import RNEsptouch from 'react-native-esptouch3';
import { globalColor, globalStyle } from '../../Style';
import WifiList from './HomeComponent/WifiList';

export default function Home({ navigation }) {

    const [wifi, setWifi] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [password, setPassword] = useState("");
    const [connectSuccess, setConnectSuccess] = useState(false);

    useEffect(() => {
        getCurrentWifi();
    }, []);



    const changeWifi = async (ssid, password) => {
        if (password === "" || !password) {
            setErrors(["Veuillez entrer le mot de passe de votre wifi"])
            return;
        }
        setLoading(true);
        await WifiManager.connectToProtectedSSID(ssid, password, false).then(async (result) => {
            setErrors(["success : " + JSON.stringify(result)])
            getCurrentWifi();
            setPassword(password);
        }).catch((error) => {
            let msg = "";
            switch (error.code) {
                case "couldNotScan": {
                    msg = "Nombre de tentatives épuisées, veuillez attendaient 2min avant de réessayer";
                    break;
                }
                case "authenticationErrorOccurred": {
                    msg = "Mot de passe incorrect";
                    break;
                }
                default: {
                    msg = "Une erreur est survenue, veuillez réessayer!";
                }
            }
            setErrors([msg]);
        });
        setLoading(false);
    }

    const getCurrentWifiIOS = async () => {
        setErrors([]);
        setLoading(true);
        setLoading(false);
    }

    const getCurrentWifi = async () => {
        setErrors([]);
        setLoading(true);
        await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Localisation',
                message: "Cette application a besoin d'accéder a la localisation de votre téléphone",
                buttonNegative: 'Refuser',
                buttonPositive: 'Accepter',
            },
        ).then(async e => {
            if (e === PermissionsAndroid.RESULTS.GRANTED) {
                const wifiEnabled = await WifiManager.isEnabled();
                if (wifiEnabled) {
                    const currentWifiConfig = {
                        SSID: await WifiManager.getCurrentWifiSSID(),
                        BSSID: await WifiManager.getBSSID(),
                        frequency: await WifiManager.getFrequency(),
                        status: await WifiManager.connectionStatus()
                    };
                    setWifi(currentWifiConfig);
                } else {
                    setErrors(["Veuillez allumer le Wi-Fi de votre téléphone et réessayer"]);
                }
            } else {
                setErrors(["Pas de permission"]);
            }
        }).catch(err => {
            setErrors(["Pas de permission"]);
        });
        setLoading(false);
    }

    const smartConnectEsp = async () => {
        if (password === "" || !password) {
            setErrors(["Veuillez entrer le mot de passe de votre wifi"])
            return;
        }
        setErrors([]);
        setLoading(true);
        await RNEsptouch.initESPTouch();
        const broadcast_type = 1;	// 1: broadcast;	0: multicast
        await RNEsptouch.startSmartConfig(password, broadcast_type).then((res) => {
            if (res.code == 200) {
                // ESPTouch success
                setConnectSuccess(true);
                setLoading(false);
            } else {
                // ESPTouch failed
                switch (res.code) {
                    case -1:
                        setErrors(["Le Peson n'est pas encore prêt! Vérifier qu'il est bien en mode appairage"]);
                        break;
                    case -2:
                        setErrors(["L'appareil ne supporte pas le Wifi 5Ghz, veuillez vous assurer que le Wifi actuellement connecté est 2.4Ghz."])
                        break;
                    case -3:
                        setErrors(["Pas de connexion Wi-fi"])
                        break;
                    default:
                        setErrors(["Une erreur s'est produite, viellez réessayer!"])
                }
            }
        }).catch((error) => {
            setErrors(["error esp: " + JSON.stringify(error)]);
        });
        setLoading(false);
    }


    return (
        <View style={{ minHeight: '100%', backgroundColor: "#2c3c43" }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ height: 200, padding: 20 }}>
                        <Image
                            source={require('../../assets/logo_ludeko_light.png')}
                            style={{
                                height: '100%',
                                width: (Dimensions.get('window').width - 40),
                                resizeMode: "center"
                            }}
                        />
                    </View>
                    {loading && (
                        <View style={{ padding: 40 }}>
                            <ActivityIndicator color={globalColor.green} size="large" animating />
                        </View>
                    )}
                    {errors.length > 0 && (
                        <View style={{ padding: 40 }}>
                            <View style={globalStyle.errorContainer}>
                                {errors.map((e, i) => <Text key={i} style={{ color: globalColor.white, fontSize: 16 }}>{e}</Text>)}
                            </View>
                        </View>
                    )}
                    {connectSuccess ? (
                        <View style={globalStyle.successContainer}>
                            <Text style={{ color: globalColor.white }}>
                                Félicitations, votre Peson est maintenant connecté !
                            </Text>
                            <Text style={{ color: globalColor.white, fontSize: 22 }}>
                                prochaine étape: Zéro déchet
                            </Text>
                        </View>
                    ) : (
                        <View style={{ padding: 20 }}>
                            {wifi ? (
                                <View>
                                    <Text style={{ color: globalColor.white, fontSize: 24, marginBottom: 10 }}>WI-FI : {wifi.SSID}</Text>
                                    {wifi.frequency > 3000 ? (
                                        <View>
                                            <WifiList changeWifi={changeWifi} currentWifi={wifi} getCurrentWifi={getCurrentWifi} />
                                        </View>
                                    ) : (
                                        <View>
                                            <Text style={{ color: globalColor.white }}>Mot de passe :</Text>
                                            <TextInput
                                                autoCorrect={false}
                                                placeholder='Entrer le mot de passe de votre wifi'
                                                onChangeText={setPassword}
                                                value={password}
                                                style={globalStyle.input}
                                            />
                                            <TouchableOpacity style={globalStyle.connectBtnStyle} onPress={() => smartConnectEsp()} >
                                                <Text style={{ fontSize: 28, color: globalColor.white }}>Connecter Mon Peson</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                </View>
                            ) : (
                                <TouchableOpacity style={globalStyle.connectBtnStyle} onPress={() => getCurrentWifi()} >
                                    <Text style={{ fontSize: 28, color: globalColor.white }}>Actualiser</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                </ScrollView >
            </SafeAreaView >
        </View >
    );
}

