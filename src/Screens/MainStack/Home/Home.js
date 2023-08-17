import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import WrapperContainer from '../../../Components/WraperContainer/WrapperContainer'
import colors from '../../../Styles/colors'
import { moderateScale } from '../../../Styles/responsiveSize'

const Home = () => {
  return (
    <WrapperContainer
      backGroundColor={colors.theamColor}
      containerStyle={{
        paddingHorizontal: moderateScale(20),
      }}>
      <Text>sdfads</Text>
  </WrapperContainer>
  )
}

export default Home

const styles = StyleSheet.create({})