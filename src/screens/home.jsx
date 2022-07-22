import { ActivityIndicator, Image, SafeAreaView, ScrollView, useWindowDimensions, View } from 'react-native'
import React, { useEffect } from 'react'
import Text from '../components/text/text'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectStatus } from '../../store/productSlice';
import BannerTitle from '../components/banner-title';
import { colors, spacing } from '../theme';



export default function Home() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus)
  const {width, height} = useWindowDimensions()
  console.log('status -->', status);

  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchProducts())
    }
  },[])

  if(status === 'loading'){
    return(
      <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <ActivityIndicator/>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <BannerTitle/>
        <View style={{backgroundColor:colors.black}}>
        <Image
						style={{
							alignSelf: "center",
							width: "100%",
							aspectRatio: 577.6 / 722,
						}}
						resizeMode="cover"
						source={require("../../assets/images/home-banner.png")}
					/>
          <View style={[{position: "absolute", top:200, width:'100%'}]}>
            <Text white preset="h2" centered>WELCOME</Text>
            <Text centered textColor={colors.grey} style={{width:width-spacing[5], alignSelf: "center", fontWeight:300, marginTop:spacing[5]}} >Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}   