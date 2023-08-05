import React, {FC, memo, useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {scaleAnimation, widthAnimation} from '../../utils/AnimatedFunctions';
const {height, width} = Dimensions.get('window');
type IntoSliderProps = {
  data: Array<object>;
  onPressStart: any;
  renderItem: any;
  pagination: boolean;
  inactiveDotWidth: number;
  activeDotWidth: number;
  inactiveDotColor: string;
  activeDotColor: string;

  mainContainerStyle: any;
  autoScroll: boolean;
  imageIntrpolateScale: Array<number>;
  scrollIndecatorHeight: number;
  pageAndNextStyle: any;
  nextButtonStyle: any;
  nextButtonTextStyle: any;
  dotStyle: any;
};
const IntoSliderCom: FC<IntoSliderProps> = ({
  data,
  onPressStart = () => {},
  renderItem = () => {},
  pagination = false,
  inactiveDotWidth,
  activeDotWidth,
  activeDotColor,
  inactiveDotColor,
  mainContainerStyle,
  autoScroll = false,
  imageIntrpolateScale = [0.9, 1, 0.9],
  pageAndNextStyle,
  nextButtonStyle,
  nextButtonTextStyle,
  dotStyle,
}) => {
  const [sliderState, setSliderState] = useState(1);
  const scrollElementHeightPercent = 10;
  const Size = 100;
  const [contentOffset, setContentOffset] = useState(0);
  const translateX = useSharedValue(0);
  const scrollViewRef = useAnimatedRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoScroll && sliderState != data.length) {
        onPressNext();
        return;
      }
      // scrollViewRef?.current?.scrollTo({x: 0 });
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderState, autoScroll]);

  const setSliderPage = (event: any) => {
    const {x} = event.contentOffset;
    const indexOfNextScreen = Math.fround((x + width) / width)?.toFixed(0);
    if (Number(indexOfNextScreen) !== Number(sliderState)) {
      setSliderState(Number(indexOfNextScreen));
    }
  };
  const onScrolHandle = useAnimatedScrollHandler(event => {
    'worklet';
    translateX.value = event.contentOffset.x;
    const scrollView =
      (event.contentOffset.x /
        (event.contentSize.width - event.layoutMeasurement.width)) *
      (100 - scrollElementHeightPercent);
    runOnJS(setContentOffset)(scrollView);
    runOnJS(setSliderPage)(event);
  });

  const onPressNext = () => {
    let a = 1;
    setSliderState(a++);
    scrollViewRef?.current?.scrollTo({x: width * sliderState});
  };

  return (
    <View style={{...mainContainerStyle, flex: 1}}>
      <Animated.ScrollView
        horizontal
        ref={scrollViewRef}
        onScroll={onScrolHandle}
        scrollEventThrottle={20}
        showsHorizontalScrollIndicator={false}
        pagingEnabled>
        {data?.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const outputRange = imageIntrpolateScale;
          const textOutputRange = [width, 0, -width];

          return (
            <Animated.View
              style={[scaleAnimation(translateX, inputRange, outputRange)]}
              key={index.toString()}>
              {renderItem(item, index)}
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
      <View style={{...pageAndNextStyle}}>
        {data.length > 1 &&
          data?.map((item, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const outputRange = [
              inactiveDotWidth,
              activeDotWidth,
              inactiveDotWidth,
            ];
            return (
              <Animated.View
                style={[
                  {
                    ...dotStyle,
                    borderRadius: 10,
                    marginHorizontal: 4,
                    backgroundColor:
                      sliderState == index + 1
                        ? activeDotColor
                        : inactiveDotColor,
                  },
                  widthAnimation(translateX, inputRange, outputRange),
                ]}
                key={index.toString()}></Animated.View>
            );
          })}

        <TouchableOpacity
          style={{...nextButtonStyle}}
          onPress={() =>
            sliderState == data.length ? onPressStart() : onPressNext()
          }>
          {sliderState === data.length ? (
            <Text style={nextButtonTextStyle}>Start</Text>
          ) : (
            <Text style={nextButtonTextStyle}>Next</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(IntoSliderCom);

const styles = StyleSheet.create({});
