import React, { useState } from 'react';
import { View, Text, StyleSheet ,Button,TouchableOpacity, TextInput,ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function HomeScreen({ navigation, route }) {
  const { name } = route.params;

  
  return (
    <View style={styles.container}>
      <View style={styles.namePosition}>
        <Icon style={styles.foto}
          name='account-circle' size={100} color={"#06a"}/>
        <View>
          <Text style={styles.nameText}>
            Olá, {(name)}
          </Text>
          <Text style={styles.nameText2}>
            Como podemos ajudar?
          </Text>
        </View>
      </View>
      <View style={styles.icon1}>
        <View style={styles.alignIconText}>
          <Icon style={styles.icon}
            onPress={() => navigation.navigate('Schedule')}
            name='calendar-clock' size={50} color={"#06a"}/>
          <Text style={styles.textIcon}>
            Agendar
            </Text>
          <Text style={styles.textIcon}>
            consultas/exames
            </Text>
        </View>
        <View style={styles.alignIconText}>
          <Icon style={styles.icon}
            onPress={() => navigation.navigate('Historic')}
            name='clipboard-text-outline' size={50} color={"#06a"}/>
          <Text style={styles.textIcon}>
            Histórico de
          </Text>
          <Text style={styles.textIcon}>
            consultas/exames
          </Text>
        </View>
      </View> 

      <View style={styles.icon2}>
        <View style={styles.alignIconText}>
          <Icon style={styles.icon}
            onPress={() => navigation.navigate('QRCode')}
            name='qrcode' size={50} color={"#06a"}/>
          <Text style={styles.textIcon}>
            Confirmar chegada
          </Text>
          <Text style={styles.textIcon}>
          </Text>
        </View>
        <View style={styles.alignIconText}>
          <Icon style={styles.icon}
            onPress={() => navigation.navigate('Transport')}
            name='ambulance' size={50} color={"#06a"}/>
          <Text style={styles.textIcon}>
            Transporte
          </Text>
          <Text style={styles.textIcon}>
          </Text>
        </View>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  foto: {
    marginTop: 40,
    marginLeft: 20,
    backgroundColor: "#ddd",
    borderRadius: 100,
  },
  namePosition: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 120,
    backgroundColor: '#07a'
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 50,
    marginLeft: 20,
  },
  nameText2: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 20,
  },
  alignIconText: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    padding: 20,
    margin: 10,
    backgroundColor: "#ddd",
    borderRadius: 100,
  },
  icon1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
  icon2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  textIcon: {
    fontWeight: "bold",
    fontSize: 14,
  },

})


