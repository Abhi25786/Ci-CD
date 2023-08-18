import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import WrapperContainer from '../../../Components/WraperContainer/WrapperContainer';
import colors from '../../../Styles/colors';
import {moderateScale, textScale} from '../../../Styles/responsiveSize';
import en from '../../../constants/lang/en';
import fontFamily from '../../../Styles/fontFamily';
import {getTodoList} from '../../../redux/actions/home';
import actions from '../../../redux/actions';
import TodoCardView from '../../../Components/AnimatedComponent/TodoCardView';

const Home = () => {
  const [getTodoListData, setTodoListData] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [curIndex, setIndex] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  useEffect(() => {
    setIsLoader(true);
    getTodoList();
  }, []);

  const getTodoList = () => {
    actions
      .getTodoList()
      .then(res => {
        console.log(res, 'resresresresres');
        setTodoListData(res?.data);
        setIsLoader(false);
        setIsRefreshing(false);
      })
      .catch(error => {
        setIsLoader(false);
        setIsRefreshing(false);
        console.log(error, 'resresresresres');
      });
  };
  const onPress = async (itm, ind) => {
    setIndex(ind);
  };
  const handleRefresh = () => {
    setIsRefreshing(true);
    getTodoList();
  };
  return (
    <WrapperContainer
      backGroundColor={colors.theamColor}
      HeaderShow={true}
      isLoading={isLoader}
      withModal={true}
      headerCenterView={() => {
        return (
          <View style={{alignItems: 'center'}}>
            <Text style={styles.headerStyle}>
              {en.TODO_LIST} {en.LIST}
            </Text>
          </View>
        );
      }}
      containerStyle={
        {
          // paddingHorizontal: moderateScale(20),
        }
      }>
      <FlatList
        data={getTodoListData}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            tintColor={colors.white}
          />
        }
        renderItem={({item, index}) => {
          return (
            <TodoCardView
              index={index}
              item={item}
              curIndex={curIndex}
              onPress={() => onPress(item, index)}
            />
          );
        }}
        contentContainerStyle={{paddingBottom: moderateScale(20)}}
        ItemSeparatorComponent={() => (
          <View style={{height: moderateScale(16)}} />
        )}
      />
    </WrapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: textScale(20),
    color: colors.white,
    fontFamily: fontFamily.muktaBold,
  },
});
