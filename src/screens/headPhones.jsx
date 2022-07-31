import { Image, SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { useDispatch, useSelector } from 'react-redux'
import { selectHeadphones } from '../../store/productSlice'
import BannerTitle from '../components/banner-title'
import CategoryTitle from '../components/category-title'
import { colors, spacing } from '../theme'
import Button from '../components/button'
import Footer from '../components/footer'

export default function HeadPhones({navigation}) {
  const headphones = useSelector(selectHeadphones)
  // console.log(headphones)
//  const onPressProduct = (id) => {
//   navigation.navigate("Details", {
//     id:id,
//   })
//  }
  return (
    <ScrollView>
      <SafeAreaView>
        <BannerTitle/>
        <CategoryTitle title="HeadPhones"/>
        <View style={{margin:spacing[5]}}>
          {
            headphones.map((headphone,index) =>{
              return(
                <View key={index} style={{marginBottom:60}}>
                  <View style={{
                    backgroundColor: colors.grey,
                    borderRadius:16,
                    paddingVertical:spacing[5],
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Image
                      style={{ width:300, height:300}} resizeMode="contain" 
                      source={headphone.featuredImage.source}
                    />
                  </View>
                  <View style={{ marginVertical: spacing[5] }}>
                    <Text centered preset="h4">
                      {headphone.name}
                    </Text>
                    <Text centered uppercase preset="h4">
                      Headphones
                    </Text>
                    <Text
                      textColor="#919191"
                      centered
                      style={{
                        marginTop: spacing[5],
                        marginHorizontal: spacing[7],
                      }}
                    >
                      {headphone.description}
                    </Text>
                  </View>
                  <Button
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: headphone.id,
                      })
                    }
                    style={{ alignSelf: "center" }}
                    title="SEE PRODUCT"
                  />
                </View>
              )
            })
          }
          <Footer></Footer>
        </View>
      </SafeAreaView>
    </ScrollView>
    
  )
}   