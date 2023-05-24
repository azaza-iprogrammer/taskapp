import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from '@react-navigation/native';



const BottomTab = (props) => {
    console.log("BOTTOM FILE PROPS", props)
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => props.navigation.navigate('MyAccount')} style={styles.eachButton}>
                    <Icon name="account" size={24} color={'red'} />
                    <Text>My Account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Recharge')} style={styles.eachButton}>
                    <Icon1 name="rupee" size={24} color={'red'} />
                    <Text>Recharge</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Movies')} style={styles.eachButton}>
                    <Icon name="television-play" size={24} color={'red'} />
                    <Text>Bytes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} style={styles.eachButton}>
                    <Icon name="menu" size={24} color={'red'} />
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default BottomTab

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    container: {
        height: 58,
        width: 360,
        borderRadius: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // marginBottom: 10
    },
    eachButton: {
        alignItems: 'center',
    }
})