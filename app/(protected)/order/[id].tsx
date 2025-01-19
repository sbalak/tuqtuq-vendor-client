import { Text, SafeAreaView, ScrollView, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { common } from '@/constants/Styles';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function index() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const [type, setType] = useState(id);
  const [types] = useState(['all', 'new', 'preparing', 'pending']);
  const [orders, setOrders] = useState([]);

  const loadOrders = async() => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/order/list?&restaurantId=1&orderType=${type}&page=1&pageSize=10`);
      console.log(response.data);
      setOrders(response.data);
    }
    catch(error) {
    } 
  }

  useEffect(() => {
    navigation.setOptions({ headerTitle: 'Orders' });
    loadOrders();
  }, []);
  
  return (
    <SafeAreaView style={common.safeArea}>
        <ScrollView style={common.container}>
            <FlatList data={types}
                  horizontal={true} 
                  showsHorizontalScrollIndicator={false} 
                  renderItem={({item, index})=>(
                    (item == type) ? 
                      <TouchableOpacity style={[styles.typeTab, {backgroundColor: Colors.Primary}]} onPress={() => {
                        setType(item)
                      }}>
                        <Text style={{fontFamily: common.defaultHeading, color: Colors.White}}>{type.toUpperCase()}</Text>
                      </TouchableOpacity> : 
                      <TouchableOpacity style={[styles.typeTab, {backgroundColor: Colors.White}]} onPress={() => {
                        setType(item)
                      }}>
                        <Text style={{fontFamily: common.defaultHeading}}>{item.toUpperCase()}</Text>
                      </TouchableOpacity>
                  )}
                  style={{marginVertical: 10}}
                  keyExtractor={(item, index) => String(index)}
            />
                  
            <FlatList data={orders} 
                      scrollEnabled={false} 
                      renderItem={({item, index})=>(
                        <View style={styles.orderContainer}>
                          <Text style={[item.status === 'New' ? common.title : common.text, styles.status, styles.pending]}>PENDING</Text>                          
                          <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom:10}}>
                            <Text style={{fontFamily: common.defaultHeading}}>ID: 5674432</Text>
                            <Text style={{fontFamily: common.defaultHeading}}>06:30 PM</Text>
                          </View>
                          <Text style={[common.text, {marginBottom:10}]}>1x Coffee, 2x Tea, 1x Lemonade 1x Coffee, 2x Tea, 1x Lemonade 1x Coffee, 2x Tea, 1x Lemonade 1x Coffee, 2x Tea, 1x Lemonade 1x Coffee, 2x Tea</Text>
                          <Text style={{fontFamily: common.defaultHeading}}>Total Bill: {item.totalAmount}</Text>
                          <View style={{height:1, backgroundColor: Colors.LighterGrey, marginVertical:10}}></View>

                          <View style={{flexDirection: 'row'}}>
                            <Text style={{fontFamily: common.defaultText, backgroundColor: '#337ab7', color: 'white', borderRadius: 5, textAlign: 'center', width:100, paddingVertical:5}}><Ionicons name="checkmark"  /> Accept</Text>
                            <Text style={{fontFamily: common.defaultText, backgroundColor: '#d9534f', color: 'white', borderRadius: 5, textAlign: 'center', width:100, paddingVertical:5, marginLeft:10}}><Ionicons name="close" /> Reject</Text>
                          </View>
                        </View>
                      )}
                      keyExtractor={(item, index) => String(index)} 
            />
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  typeTab: {
    padding: 10, 
    borderWidth: 1, 
    borderColor: Colors.Secondary, 
    borderRadius: 10, 
    marginRight: 10 
  },
  orderContainer: {
    padding:10, 
    backgroundColor: Colors.White, 
    borderRadius: 10, 
    marginBottom:10
  },
  status: {
    textAlign: 'center', 
    color: Colors.White, 
    borderTopLeftRadius:20,
    borderTopRightRadius:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:20,
    paddingTop:2.5,
    marginBottom:10 
  },
  new: {
    width:65,
    backgroundColor: Colors.Green
  },
  preparing: {
    width:105,
    backgroundColor: Colors.LightBlue
  },
  pending: {
    width:95,
    backgroundColor: Colors.Amber
  }
});