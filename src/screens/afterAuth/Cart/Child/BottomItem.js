// @ts-nocheck

import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Dimensions,
    Image,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    TextInput,
    SafeAreaView,
    Platform,
    StatusBar,
    ImageBackground
} from 'react-native';

import StepIndicator from 'react-native-step-indicator';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/MaterialIcons';
import Heading from '../../../../components/Heading';
import Btn from '../../../../components/Btn';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../../../assets/colors/colors';
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveScreenFontSize
} from 'react-native-responsive-dimensions';
import InputField from '../../../../components/InputField';
import deviceInfo from 'react-native-device-info';
// import CheckBox from '@react-native-community/checkbox';
import BackBtnHeader from '../../../../components/BackBtnHeader';
import MyText from '../../../../components/MyText';
let { width, height } = Dimensions.get('window');

export default function BottomItem({ navigation, data }) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('favOrderDetail')}
            style={{

                elevation: 5,
                height: responsiveScreenFontSize(22),
                borderRadius: responsiveScreenFontSize(3),
                width: 110,
                // marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: responsiveFontSize(0.5),
                marginVertical: responsiveFontSize(0.4)
            }}>
            <ImageBackground
                resizeMode="stretch"
                style={{ width: 110, height: responsiveScreenFontSize(22) }}
                source={require('../../../../assets/favitem.png')}>
                <View
                    style={{
                        position: 'absolute',

                        width: 110,
                        height: responsiveScreenFontSize(22),

                        opacity: 0.1,
                        backgroundColor: 'black',
                        borderRadius: responsiveScreenFontSize(3),
                    }}></View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: 110,
                        height: responsiveScreenFontSize(10),

                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                    }}>

                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            paddingHorizontal: responsiveScreenFontSize(1),
                            paddingBottom: responsiveScreenFontSize(1),

                            height: responsiveFontSize(10)
                        }}>


                        <View style={{
                            width: responsiveFontSize(3),
                            borderRadius: responsiveFontSize(100),
                            height: responsiveFontSize(3),
                            justifyContent: 'center', alignItems: 'center',
                            borderWidth: 2, borderColor: 'white'
                        }}>
                            <TouchableOpacity>
                                <Feather
                                    name="shopping-bag"
                                    size={16}
                                    color={'white'}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}