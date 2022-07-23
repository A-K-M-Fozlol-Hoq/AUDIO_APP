import { Image, SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { useDispatch, useSelector } from 'react-redux'
import { selectEarphones } from '../../store/productSlice'
import BannerTitle from '../components/banner-title'
import CategoryTitle from '../components/category-title'
import { colors, spacing } from '../theme'
import Button from '../components/button'
import Footer from '../components/footer'

export default function EarPhones({navigation}) {
  const earphones = useSelector(selectEarphones)
  
  return (
    <ScrollView>
      <SafeAreaView>
        <BannerTitle/>
        <CategoryTitle title="EarPhones"/>
        <View style={{margin:spacing[5]}}>
          {
            earphones.map((earphone,index) =>{
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
                      source={earphone.featuredImage.source}
                    />
                  </View>
                  <View style={{ marginVertical: spacing[5] }}>
                    <Text centered preset="h4">
                      {earphone.name}
                    </Text>
                    <Text centered uppercase preset="h4">
                      EarPhones
                    </Text>
                    <Text
                      textColor="#919191"
                      centered
                      style={{
                        marginTop: spacing[5],
                        marginHorizontal: spacing[7],
                      }}
                    >
                      {earphone.description}
                    </Text>
                  </View>
                  <Button
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: earphone.id,
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