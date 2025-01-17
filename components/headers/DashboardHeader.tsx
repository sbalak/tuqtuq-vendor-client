import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, Platform, StatusBar } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useLocation } from '@/hooks/useLocation'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { common } from '@/constants/Styles'

const DashboardHeader = () => {
    const { top } = useSafeAreaInsets();
    const { locationState, setLocality} = useLocation();

    return (
        <View style={[styles.container, {paddingTop: top}]}>
          <StatusBar barStyle={'light-content'} backgroundColor={Colors.Primary} />
          <TouchableOpacity onPress={() => {}}>
              <Image style={styles.locator} source={require('@/assets/images/location.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.titleContainer} onPress={setLocality}>
              <Text style={[common.defaultHeading, {color: Colors.LightGrey}]}>Peekay Coffee</Text>
              <Text style={common.defaultHeading}>{locationState.locality}</Text>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusButton} onPress={() => router.push('/store/list')}>
              <Text style={[common.defaultText, {color: Colors.White}]}>Closed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileButton} onPress={() => router.push('/settings')}>
              <Ionicons name='settings-outline' size={20} color={Colors.Primary} />
          </TouchableOpacity>
        </View>
    )
}

export default DashboardHeader;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: Colors.LightGrey,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      }
    }),
    backgroundColor: Colors.White,
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locator: {
      width: 30,
      height: 30,
      marginTop:7
  },
  titleContainer: {
      flex: 1,
      paddingTop:7
  },
  statusButton: {
    backgroundColor: '#F69697', //#A3C585
    padding: 10,
    marginTop:7,
    width:70,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  profileButton: {
      backgroundColor: Colors.Secondary,
      padding: 10,
      marginTop:7,
      borderRadius: 50
  },
})
