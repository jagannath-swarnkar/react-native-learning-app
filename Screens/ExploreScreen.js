import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ExploreScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ExploreScreen</Text>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });