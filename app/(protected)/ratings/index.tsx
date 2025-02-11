import { Text, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { common } from '@/constants/Styles';
import { useNavigation } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: 'Ratings' });
  }, []);
  
  return (
    <SafeAreaView style={common.safeArea}>
        <ScrollView style={common.container}>
          <View style={rating.container}>
            <View style={rating.value}>
              <Text style={rating.averageValue}>
                <Ionicons name="star" size={24} color={Colors.Gold} /> 4.7
              </Text>
              <Text style={[common.text, rating.totalValue]}>out of 5</Text>
            </View>
            <View style={rating.breakdown}>
              <View style={rating.breakdownRow}>
                <Text style={[common.text, rating.breakdownRated]}>769</Text> 
                <Text style={rating.breakdownStar}>
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                </Text>
              </View>
              <View style={rating.breakdownRow}>
                <Text style={[common.text, rating.breakdownRated]}>4,56,233</Text> 
                <Text style={rating.breakdownStar}>
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                </Text>
              </View>
              <View style={rating.breakdownRow}>
                <Text style={[common.text, rating.breakdownRated]}>1,456</Text> 
                <Text style={rating.breakdownStar}>
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                </Text>
              </View>
              <View style={rating.breakdownRow}>
                <Text style={[common.text, rating.breakdownRated]}>3,312</Text> 
                <Text style={rating.breakdownStar}>
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                </Text>
              </View>
              <View style={rating.breakdownRow}>
                <Text style={[common.text, rating.breakdownRated]}>89</Text> 
                <Text style={rating.breakdownStar}>
                  <Ionicons name="star" size={14} color={Colors.Gold} />
                </Text>
              </View>
            </View>
          </View>
          <View style={user.container}>
            <Text style={user.scoreStar}>
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
            </Text>
            <Text style={common.text}>Rated 2 hours ago</Text>
          </View>
          <View style={user.container}>
            <Text style={user.scoreStar}>
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
            </Text>
            <Text style={common.text}>Rated 5 hours ago</Text>
          </View>
          <View style={user.container}>
            <Text style={user.scoreStar}>
              <Ionicons name="star" size={14} color={Colors.Gold} />
            </Text>
            <Text style={common.text}>Rated 5 hours ago</Text>
          </View>
          <View style={user.container}>
            <Text style={user.scoreStar}>
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
            </Text>
            <Text style={common.text}>Rated 7 hours ago</Text>
          </View>
          <View style={user.container}>
            <Text style={user.scoreStar}>
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
              <Ionicons name="star" size={14} color={Colors.Gold} />
            </Text>
            <Text style={common.text}>Rated 8 hours ago</Text>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const rating = StyleSheet.create({
  container: {
    height: 130,
    marginVertical:10,
    padding:10,
    borderRadius: 5,
    backgroundColor: Colors.White,
    flexDirection: 'row'
  },
  value: {
    width:'40%',
    paddingTop: 22,
    paddingLeft: 32,
    borderRightWidth: 2,
    borderRightColor: Colors.LighterGrey
  },
  averageValue: {
    fontFamily: common.defaultTitle,
    fontSize: 26
  },
  totalValue: {
    fontSize: 18
  },
  breakdown: {
    width:'60%'
  },
  breakdownRow: {
    flexDirection: 'row',
    paddingBottom: 2
  },
  breakdownRated: {
    width: 75,
    textAlign: 'right',
  },
  breakdownStar: {
    paddingLeft: 10,
    paddingTop: 2
  }
})

const user = StyleSheet.create({
  container: {
    height: 40,
    marginBottom:10,
    padding:10,
    borderRadius: 5,
    backgroundColor: Colors.White,
    flexDirection: 'row'
  },
  scoreStar: {
    paddingTop: 2,
    width: 75
  }
})