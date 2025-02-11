import { Text, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { common } from '@/constants/Styles';
import { useNavigation } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: 'Category' });
  }, []);
  
  return (
    <SafeAreaView style={common.safeArea}>
        <ScrollView style={common.container}>
          <View style={styles.container}>
            <View style={styles.edit}>
              <Ionicons name="create" size={24} color={Colors.Primary} />
            </View>
            <Text style={styles.text}> 1. Starters</Text>
            <View style={styles.move}>
              <Ionicons name="arrow-up-circle" size={24} color={Colors.LighterGrey}  />
            </View>
            <View style={styles.move}>
              <Ionicons name="arrow-down-circle" size={24} color={Colors.Primary}  />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.edit}>
              <Ionicons name="create" size={24} color={Colors.Primary} />
            </View>
            <Text style={styles.text}>2. Egg Items</Text>
            <View style={styles.move}>
              <Ionicons name="arrow-up-circle" size={24} color={Colors.Primary}  />
            </View>
            <View style={styles.move}>
              <Ionicons name="arrow-down-circle" size={24} color={Colors.Primary}  />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.edit}>
              <Ionicons name="create" size={24} color={Colors.Primary} />
            </View>
            <Text style={styles.text}>3. Main Course Dishes</Text>
            <View style={styles.move}>
              <Ionicons name="arrow-up-circle" size={24} color={Colors.Primary}  />
            </View>
            <View style={styles.move}>
              <Ionicons name="arrow-down-circle" size={24} color={Colors.Primary}  />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.edit}>
              <Ionicons name="create" size={24} color={Colors.Primary} />
            </View>
            <Text style={styles.text}>4. Desserts</Text>
            <View style={styles.move}>
              <Ionicons name="arrow-up-circle" size={24} color={Colors.Primary}  />
            </View>
            <View style={styles.move}>
              <Ionicons name="arrow-down-circle" size={24} color={Colors.Primary}  />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.edit}>
              <Ionicons name="create" size={24} color={Colors.Primary} />
            </View>
            <Text style={styles.text}>5. Cold Beverages</Text>
            <View style={styles.move}>
              <Ionicons name="arrow-up-circle" size={24} color={Colors.Primary}  />
            </View>
            <View style={styles.move}>
              <Ionicons name="arrow-down-circle" size={24} color={Colors.LighterGrey}  />
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop:10,
    padding:10,
    borderRadius: 5,
    backgroundColor: Colors.White,
    flexDirection: 'row'
  },
  edit: {
    width: '5%'
  },
  text: {
    fontFamily: common.defaultText,
    paddingLeft: 10,
    paddingTop: 4,
    width: '65%'
  },
  move: {
    width: '15%',
    paddingTop: 3,
    alignItems: 'center'
  },
})