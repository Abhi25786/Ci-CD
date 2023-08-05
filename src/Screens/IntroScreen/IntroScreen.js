import React, { memo, useState } from 'react';
import {  Image, Text, View } from 'react-native';
import IntoSliderCom from '../../Components/IntroSlider/IntoSliderCom';
import { introStateUpdate } from '../../redux/actions/intro';
import { Images } from '../../theme';
import { style } from './styles';
import Animated, { cancelAnimation, Easing, interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import imagePath from '../../constants/imagePath'
import en from '../../constants/lang/en';
import { useEffect } from 'react';
import { ImageSpinAnimation } from '../../utils/AnimatedFunctions';
import colos from '../../Styles/colors';

const IntroScreen = () => {
  const [imgaeData, setImageData] = useState([{ title: en.WELCOME, metaDiscription: '' }, { title: en.ABOUT_APP, metaDiscription: en.WELCOM_DISCRIPTION }])
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1,{ duration: 7000,easing:Easing.linear}),
      -1,
    );

  }, []);
  const reanimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value,[0,1],[0,360])
    return {
      transform: [{rotate: `${rotate}deg`}],
    };
  }, []);

  
  const renderItem = (item, index) => {
    return (
      <View style={style.introMainView}>
        <Animated.Image
          source={imagePath.logo}
          style={[style.animatedImage,index == 0 ?reanimatedStyle : null]}
          resizeMode="stretch"
        />
        <View style={style.textMainView}>
          <Text style={style.titelStyle}>
            {item.title}
          </Text>
          <Text
            style={style.subTitle}>
            {item.metaDiscription}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1,}}>
      <IntoSliderCom
        data={imgaeData}
        renderItem={renderItem}
        pagination={true}
        activeDotWidth={20}
        inactiveDotWidth={10}
        inactiveDotColor={colos.white}
        activeDotColor={colos.white}
        // autoScroll={true}
        imageIntrpolateScale={[0.3, 1, 0.3]}
        onPressStart={() => introStateUpdate(false)}
        scrollIndecatorHeight={6}
        pageAndNextStyle={style.pagitationView}
        mainContainerStyle={{backgroundColor:colos.theamColor}}
        nextButtonStyle={{right: 30, position: 'absolute'}}
        nextButtonTextStyle={style.nextButtonStyle}
        dotStyle={{height:6}}
      />
    </View>
  );
};

export default memo(IntroScreen);

