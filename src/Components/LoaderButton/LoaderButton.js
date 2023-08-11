import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import colors from '../../Styles/colors'
import { height, moderateScale } from '../../Styles/responsiveSize'

const LoaderButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>LoaderButton</Text>
    </TouchableOpacity>
  )
}

export default memo(LoaderButton)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: moderateScale(8),
        borderWidth: moderateScale(1),
        backgroundColor: colors.white,
        height:height/moderateScale(16),
        paddingHorizontal: moderateScale(12),
      },
})