import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { common } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export default function dashboard() {  
  return (
    <SafeAreaView style={common.safeArea}>
      <ScrollView style={common.container}>
        
        
        <View style={styles.titleContainer}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Ionicons name="apps-outline" size={24} color={'#FFB300'} /> 
            <Text style={common.heading}>Dashboard</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <View style={styles.dashboardTile}>
            <Text style={[common.defaultTitle, {paddingBottom: 10, color: '#007bff' }]}>New</Text>
            <Text style={common.subHeading}>3</Text>
          </View>
          <View style={styles.dashboardTile}>
            <Text style={[common.defaultTitle, {paddingBottom: 10, color: '#ffc107' }]}>Preparing</Text>
            <Text style={common.subHeading}>9</Text>
          </View>
          <View style={styles.dashboardTile}>
            <Text style={[common.defaultTitle, {paddingBottom: 10, color: '#fd7e14' }]}>Pending</Text>
            <Text style={common.subHeading}>2</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <View style={styles.dashboardTile}>
            <Text style={[common.defaultTitle, {paddingBottom: 10, color: '#198754' }]}>Completed</Text>
            <Text style={common.subHeading}>455</Text>
          </View>
          <View style={styles.dashboardTile}>
            <Text style={[common.defaultTitle, {paddingBottom: 10, color: '#dc3545' }]}>Rejected</Text>
            <Text style={common.subHeading}>0</Text>
          </View>
          <View style={styles.dashboardTile}>
            <Text style={[common.defaultTitle, {paddingBottom: 10, color: '#6c757d' }]}>All</Text>
            <Text style={common.subHeading}>1345</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', padding:5, backgroundColor: Colors.Primary, borderRadius: 5}}>
          <Ionicons name="timer-outline" size={18} color={Colors.White} style={{padding:10}} />
          <Text style={[common.text, {color: Colors.White, padding: 10}]}>Preparation Time (in mins)</Text>
          <View style={[styles.textInput, {marginLeft:88}]}>
            <TextInput 
              style={[common.text, styles.textInputBox]} 
              placeholderTextColor={Colors.LighterGrey} 
              placeholder='0' 
              defaultValue={'5'} 
              onChangeText={(text: string) => {
                if (text.length > 0) {
                  //setLastName(text);
                }
              }}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dashboardTile: {
    backgroundColor: Colors.White, 
    marginRight: 10, 
    paddingHorizontal: 20,
    paddingTop: 10, 
    height:75, 
    width:124, 
    borderRadius: 5
  },
  textInput: {
    width: "12%", 
    height: 45, 
    borderColor: Colors.Secondary, 
    borderWidth: 1, 
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  textInputBox: {
    width: "100%",
    fontSize: 14
  }
})