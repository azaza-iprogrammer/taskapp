import { StyleSheet, Text, View, ScrollView, Image, Animated, Easing, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, withTiming } from 'react-native-reanimated';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';

const Dashboard = (props) => {

  const [scrollEndReached, setScrollEndReached] = useState(false)
  const [scrollTopReached, setScrollTopReached] = useState(true)
  const translateY = React.useRef(new Animated.Value(0)).current;


  useEffect(() => {
    if ( scrollTopReached || scrollEndReached ) {
      translateIn();
    }else {
      translateOut();
    }
  }, [scrollEndReached, scrollTopReached])

  const translateOut = () => {
    Animated.timing(translateY, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,

    }).start();
  };

  const translateIn = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,

    }).start();
  };



  return (
    <>
      <Animated.ScrollView
        onScroll={(event) => {
          if ((event.nativeEvent.contentOffset.y) > 300) {
            setScrollEndReached(true)
            console.log("end",scrollEndReached)
          }else if((event.nativeEvent.contentOffset.y)>0 && (event.nativeEvent.contentOffset.y)<300){
            setScrollEndReached(false)
            setScrollTopReached(false)
          }
          else {
            if ((event.nativeEvent.contentOffset.y) == 0) {
              setScrollTopReached(true)
              console.log("top",scrollTopReached)
            }
          }

          
        }}
      
      >
        <View style={styles.container1}>
          <Image style={{ height: 250, width: 300, marginBottom: 10 }} source={require('../assets/vi.png')} />
          <Image style={{ height: 250, width: 300, marginBottom: 10 }} source={require('../assets/recharge.jpeg')} />
          <Image style={{ height: 250, width: 300, marginBottom: 10 }} source={require('../assets/vi-data-packs.png')} />
          <Text style={{ height: 250, width: 300, marginBottom: 10 }}>This is Vi App limited where you can enjoy music movies and more </Text>
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={[{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 100],
                extrapolate: 'clamp',
              }),
            },
          ],
        }, styles.outerContainer]}
      >
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
          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={styles.eachButton}>
            <Icon name="menu" size={24} color={'red'} />
            <Text>Menu</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    top: 15
  },
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative'
  },
  container: {
    height: height * 0.075,
    width: width * 0.92,
    borderRadius: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10
  },
  eachButton: {
    alignItems: 'center',
  }
})