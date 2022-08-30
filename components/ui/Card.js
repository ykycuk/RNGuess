import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/colors';

function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default  Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,  //box-shadow for android
        shadowColor: 'black',  //box-shadow for ios
        shadowOffset: { width: 0, height: 2 }, //box-shadow for ios
        shadowRadius: 6, //box-shadow for ios
        shadowOpacity: 0.25, //box-shadow for ios
    },
})