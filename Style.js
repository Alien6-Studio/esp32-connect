import { StyleSheet } from "react-native";

export const globalColor = {
    grey: "#2c3c43", 
    grey2: "#1b2529", 
    blue: "#80C0FF",
    green: "#94c438",
    white: "#fff",
    black: "#000",
    red: "#ee2e3f"
}

export const globalStyle = StyleSheet.create({
    container: {
        marginBottom: 50,
        padding: 10 
    },
    section: {
        padding: 10 
    },
    errorContainer: {
        borderRadius: 5,
        backgroundColor: "#ee2e3f75",
        padding: 10
    },
    successContainer: {
        marginTop: 50, 
        marginHorizontal: 20,
        borderRadius: 5,
        backgroundColor: "#94c438",
        padding: 10,
        alignItems: 'center'
    },
    input: {
        marginTop: 10,
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: globalColor.green,
        padding: 10,
        color: globalColor.white
    },
    connectBtnStyle: {
        margin: 20,
        borderRadius: 50,
        height: 100,
        backgroundColor: globalColor.blue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        fontSize: 24,
        marginVertical: 5,
        fontWeight: "bold"
    },
    h2: {
        fontSize: 20,
        marginVertical: 3,
        fontWeight: "bold"
    },
    h3: {
        fontSize: 18,
        marginVertical: 2
    },
    h4: {
        fontSize: 16,
        marginVertical: 1
    },
    text: {
        marginBottom: 5,
        fontSize: 14,
        textAlign: "justify"
    },
    link: {
        color: globalColor.blue,
        margin: 5
    }
});