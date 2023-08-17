import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import WrapperContainer from '../../../Components/WraperContainer/WrapperContainer'
import colors from '../../../styles/colors'
import { moderateScale } from '../../../styles/responsiveSize'

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