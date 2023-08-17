import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/colors'
import { height, width } from '../../styles/responsiveSize'
import HeaderOne from '../Headers/HeaderOne'
import CustomStatusBar from '../StatusBar/CustomStatusBar'

const WrapperContainer = ({ containerStyle, statusBarColor, children, backGroundColor,

    HeaderShow = false,
    headerStyle
}) => {
    return (
        <View style={{ flex: 1, }}>
            <CustomStatusBar backgroundColor={backGroundColor} />
            {HeaderShow ?
                <HeaderOne
                    headerStyle={{backgroundColor:backGroundColor,...headerStyle}}
                leftIcon={() => {
                    return (
                        <Text>sddvs</Text>
                    )
                }}
            /> : null}
            <View style={{ flex: 1, ...containerStyle, backgroundColor: backGroundColor }}>
                {children}
            </View>
        </View>
    )
}

export default memo(WrapperContainer)

const styles = StyleSheet.create({})