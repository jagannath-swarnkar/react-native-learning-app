import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NotificationScreen = () => {
    return (
        <View style={styles.container}>
            <Text>NotificationScreen</Text>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });