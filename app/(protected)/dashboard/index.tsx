import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { common } from '@/constants/Styles';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export default function dashboard() {  
  return (
    <SafeAreaView style={common.safeArea}>
      <ScrollView style={common.container}>
        

      <View style={{flexDirection: 'row', marginTop:10, padding:5, backgroundColor: Colors.Primary, borderRadius: 5}}>
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
        
        <View style={styles.titleContainer}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Ionicons name="apps-outline" size={24} color={Colors.Primary} /> 
            <Text style={common.heading}>Orders Today</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <View style={styles.dashboardTile}>
            <Text style={[common.defaultHeading, {paddingBottom: 10 }]}>ALL</Text>
            <Text style={common.text}>3</Text>
          </View>
          <View style={styles.dashboardTile}>
            <Text style={[common.defaultHeading, {paddingBottom: 10 }]}>NEW</Text>
            <Text style={common.text}>9</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <View style={styles.dashboardTile}>
            <Text style={[common.defaultHeading, {paddingBottom: 10 }]}>PREPARING</Text>
            <Text style={common.text}>455</Text>
          </View>
          <View style={styles.dashboardTile}>
            <Text style={[common.defaultHeading, {paddingBottom: 10 }]}>PENDING</Text>
            <Text style={common.text}>0</Text>
          </View>
        </View>
        
        
        <View style={styles.titleContainer}>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Ionicons name="stats-chart" size={24} color={Colors.Secondary} />
            <Text style={common.heading}>Revenue Insights</Text>
          </View>
        </View>

        
        <View style={{marginBottom: 10}}>
          <View style={{flexDirection: 'row', padding:10, borderRadius:5, backgroundColor: Colors.White}}>
            <View style={{width: '33.33%'}}>
              <Text style={[common.defaultHeading, {marginBottom: 5}]}>TODAY</Text>
              <Text style={[common.defaultHeading, {color: Colors.LightGrey, marginBottom:5 }]}>₹ 4,55,000</Text>
              <Text style={common.text}>56,778 orders</Text>
            </View>
            <View style={{width: '33.33%'}}>
              <Text style={[common.defaultHeading, {marginBottom: 5}]}>YESTERDAY</Text>
              <Text style={[common.defaultHeading, {color: Colors.LightGrey, marginBottom:5 }]}>₹ 4,55,000</Text>
              <Text style={common.text}>56,778 orders</Text>
            </View>
            <View style={{width: '33.33%'}}>
              <Text style={[common.defaultHeading, {marginBottom: 5}]}>THIS WEEK</Text>
              <Text style={[common.defaultHeading, {color: Colors.LightGrey, marginBottom:5 }]}>₹ 4,55,000</Text>
              <Text style={common.text}>56,778 orders</Text>
            </View>
          </View>
        </View>

        <View style={{height:1, backgroundColor: Colors.White, marginBottom: 10}}></View>

        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <View style={{width:'50%', backgroundColor: Colors.White}}>
            <Text style={[common.defaultHeading, {paddingBottom: 10 }]}>MENU</Text>
            <Text style={common.text}>455 items available</Text>
          </View>
          <View style={{width:'50%', backgroundColor: Colors.White}}>
            <Text style={[common.defaultHeading, {paddingBottom: 10 }]}>CATEGORY</Text>
            <Text style={common.text}>5 categories</Text>
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
    width:'48.75%', 
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