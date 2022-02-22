import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {config, animated, useTransition} from "@react-spring/native";
import {useState} from "react";

export default function App() {

  // const transitions = useTransition(true, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   delay: 200,
  //   config: config.molasses,
  // })
  // return transitions(
  //
  //    (styles, item) => item && <animated.View style={styles}>
  //      <View style={{
  //        flex: 1,
  //        justifyContent: "center",
  //        alignItems: "center"
  //      }}>
  //        <Text style={{
  //          fontSize: 32
  //        }}>110819026</Text>
  //        <Text style={{
  //          fontSize: 32,
  //          fontWeight: "bold"
  //        }}>陳亮禎</Text>
  //      </View>
  //    </animated.View>
  // )

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>



      <Text style={{
        fontSize: 32
      }}>110819026</Text>
      <Text style={{
        fontSize: 32,
        fontWeight: "bold"
      }}>陳亮禎</Text>

      <StatusBar style="auto" />
    </View>
  )
}