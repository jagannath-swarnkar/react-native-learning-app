import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { 
    Text,
    Drawer,
    Avatar,
    Title,
    Caption,
    Paragraph,
    TouchableRipple,
    Switch,
 } from 'react-native-paper';
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


const DrawerContent = (props) => {
    const {navigation} = props
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop:15}}>
                            <Avatar.Image 
                                source={{
                                    uri: "https://imgur.com/TflOHVA.png"
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Jagannath Swarnkar</Title>
                                <Caption style={styles.caption}>@jagannath</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>80</Paragraph>
                                <Caption style={styles.caption}>Followings</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size})=>(
                                <Ionicons
                                    name="ios-home-outline" 
                                    size={size} 
                                    color={color} />
                            )}
                            label="Home"
                            onPress={()=>{
                                navigation.navigate('Feed')
                            }}
                        />
                        <DrawerItem 
                            icon={({color, size})=>(
                                <MaterialCommunityIcons
                                    name="account-outline" 
                                    size={size} 
                                    color={color} />
                            )}
                            label="Profile"
                            onPress={()=>{
                                navigation.navigate('Profile')
                            }}
                        />
                        <DrawerItem 
                            icon={({color, size})=>(
                                <Ionicons
                                    name="bookmark-outline" 
                                    size={size} 
                                    color={color} />
                            )}
                            label="Bookmarks"
                            onPress={()=>{
                                navigation.navigate('Notifications')
                            }}
                        />
                        <DrawerItem 
                            icon={({color, size})=>(
                                <Feather
                                    name="settings" 
                                    size={size} 
                                    color={color} />
                            )}
                            label="Explore"
                            onPress={()=>{
                                navigation.navigate('Explore')
                            }}
                        />
                        <DrawerItem 
                            icon={({color, size})=>(
                                <MaterialCommunityIcons
                                    name="account-check-outline" 
                                    size={size} 
                                    color={color} />
                            )}
                            label="Support"
                            onPress={()=>{}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={()=>setIsDarkTheme(p=>!p)}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size})=>(
                        <MaterialIcons
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={()=>{}}
                />
            </Drawer.Section>
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    }
})
