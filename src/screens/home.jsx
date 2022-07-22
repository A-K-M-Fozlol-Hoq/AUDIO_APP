import { ActivityIndicator, Image, Pressable, SafeAreaView, ScrollView, useWindowDimensions, View } from 'react-native'
import React, { useEffect } from 'react'
import Text from '../components/text/text'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectFeaturedProducts, selectStatus } from '../../store/productSlice';
import BannerTitle from '../components/banner-title';
import { colors, spacing } from '../theme';
import { AntDesign } from '@expo/vector-icons';

const CategoryBox =({title, image, onPress}) =>{
  return (
    <Pressable onPress={onPress} style={{
      marginVertical:spacing[8],
      marginHorizontal : spacing[5],
      borderRadius: spacing[4],
      backgroundColor:colors.grey,
      alignItems:'center',
      padding:spacing[5]}}>
        <Image source={image} style={{top:-60, width:100, height:100}} resizeMode="contain" />
        <View style={{alignItems:'center', justifyContent: 'center', top:-20}}>
          <Text preset="h6">{title}</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',marginTop:spacing[4]}}>
          <Text prest='subtitle' textColor='#7c7c7c' centered style={{marginRight:spacing[4]}}>SHOP</Text>
          <AntDesign name="right" color = {colors.primary} size={14} />
        </View>
    </Pressable>
  )
}

const FeaturedProduct = ({ name, category, image}) =>{
  const windowWidth = useWindowDimensions().width
  return(
    <View></View>
  )
}

export default function Home() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus)
  const featuredProducts = useSelector(selectFeaturedProducts)
  console.log('status -->', status); 
  console.log('featuredProducts -->', featuredProducts); 
  const {width, height} = useWindowDimensions()

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
    
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView>
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

        <View style={{paddingVertical:spacing[8]}}>
          <CategoryBox title="HEADPHONES" image={require("../../assets/images/home-headphone.png")} />
          <CategoryBox title="SPEAKER" image={require("../../assets/images/home-speaker.png")} />
          <CategoryBox title="EARPHONES" image={require("../../assets/images/home-earphone.png")} />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}   