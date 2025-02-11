import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { common } from '@/constants/Styles';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

export default function dashboard() {  
  return (
    <SafeAreaView style={common.safeArea}>
      <ScrollView style={common.container}>
        
        <View style={styles.prepContainer}>
          <Ionicons name="timer-outline" size={18} color={Colors.White} style={styles.prepIcon} />
          <Text style={[common.text, styles.prepText]}>Preparation Time (in mins)</Text>
          <View style={[styles.textInput, styles.prepTextInput]}>
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
          <View style={styles.title}>
            <Ionicons name="apps-outline" size={24} color={Colors.Primary} /> 
            <Text style={common.title}>Orders Today</Text>
          </View>
        </View>

        <View style={styles.dashboardContainer}>
          <TouchableOpacity style={styles.dashboardTile} onPress={() => router.push('/order/all')}>
            <Text style={styles.dashboardTileText}><Ionicons name="sparkles-outline" size={12} color="black" /> ALL</Text>
            <Text style={common.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashboardTile} onPress={() => router.push('/order/new')}>
            <Text style={styles.dashboardTileText}><Ionicons name="paper-plane-outline" size={12} color="black" /> NEW</Text>
            <Text style={common.text}>9</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dashboardContainer}>
          <TouchableOpacity style={styles.dashboardTile} onPress={() => router.push('/order/preparing')}>
            <Text style={styles.dashboardTileText}><Ionicons name="stopwatch-outline" size={12} color="black" /> PREPARING</Text>
            <Text style={common.text}>455</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashboardTile} onPress={() => router.push('/order/pending')}>
            <Text style={styles.dashboardTileText}><Ionicons name="warning-outline" size={12} color="black" /> PENDING</Text>
            <Text style={common.text}>0</Text>
          </TouchableOpacity>
        </View>
                
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Ionicons name="stats-chart" size={24} color={Colors.Secondary} />
            <Text style={common.title}>Revenue Insights</Text>
          </View>
        </View>

        <View style={styles.commonContainer}>
          <View style={{width: '33.33%'}}>
            <Text style={{fontFamily: common.defaultTitle, marginBottom: 5}}>TODAY</Text>
            <Text style={{fontFamily: common.defaultTitle, color: Colors.LightGrey, marginBottom:5 }}>₹ 4,55,000</Text>
            <Text style={common.text}>778 orders</Text>
          </View>
          <View style={{width: '33.33%'}}>
            <Text style={{fontFamily: common.defaultTitle, marginBottom: 5}}>THIS WEEK</Text>
            <Text style={{fontFamily: common.defaultTitle, color: Colors.LightGrey, marginBottom:5 }}>₹ 14,55,000</Text>
            <Text style={common.text}>56,778 orders</Text>
          </View>
          <View style={{width: '33.33%'}}>
            <Text style={{fontFamily: common.defaultTitle, marginBottom: 5}}>THIS MONTH</Text>
            <Text style={{fontFamily: common.defaultTitle, color: Colors.LightGrey, marginBottom:5 }}>₹ 24,55,000</Text>
            <Text style={common.text}>7,86,222 orders</Text>
          </View>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.commonContainer}>
          <TouchableOpacity style={{width:'66.66%'}} onPress={() => router.navigate('/menu')}>
            <Text style={{fontFamily: common.defaultTitle}}><Ionicons name="fast-food-outline" size={14} color="black" /> FOOD ITEMS</Text>
            <Text style={common.text}>245 available & 100 unavailable</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:'33.33%'}} onPress={() => router.navigate('/category')}>
            <Text style={{fontFamily: common.defaultTitle}}><Ionicons name="bookmarks-outline" size={14} color="black" /> CATEGORIES</Text>
            <Text style={common.text}>5 active</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.commonContainer}>
          <TouchableOpacity style={{width:'45%'}} onPress={() => router.navigate('/transactions')}>
            <Text style={{fontFamily: common.defaultTitle}}><Ionicons name="list" size={14} color="black" /> TRANSACTIONS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:'30%'}} onPress={() => router.navigate('/offers')}>
            <Text style={{fontFamily: common.defaultTitle}}><Ionicons name="ticket" size={14} color="black" /> OFFERS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:'25%'}} onPress={() => router.navigate('/ratings')}>
            <Text style={{fontFamily: common.defaultTitle}}><Ionicons name="star" size={14} color="black" /> RATINGS</Text>
          </TouchableOpacity>
        </View>
        
        <View style={brand.container}>
          <Text style={brand.title}>TuqTuq</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  commonContainer: {
    flexDirection: 'row', 
    padding:10, 
    backgroundColor: Colors.White, 
    marginBottom: 10, 
    borderRadius:5 
  },
  divider: {
    height:1, 
    backgroundColor: Colors.White, 
    marginBottom: 10
  },
  prepContainer: {
    flexDirection: 'row', 
    marginTop:10, 
    padding:5, 
    backgroundColor: Colors.Primary, 
    borderRadius: 5
  },
  prepIcon: {
    padding:10
  },
  prepText: {
    color: Colors.White, 
    padding: 10
  },
  prepTextInput: {
    marginLeft:88
  },
  titleContainer: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    flexDirection: 'row', 
    gap: 5
  },
  dashboardContainer: {
    flexDirection: 'row', 
    marginBottom: 10
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
  dashboardTileText: {
    fontFamily: common.defaultTitle,
    paddingBottom: 10 
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
    textAlign:'center',
    fontSize: 14
  }
})

const brand = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 50
  },
  title: {
    color: Colors.White,
    fontFamily: 'WinterHalf',
    fontSize: 80
  }
});