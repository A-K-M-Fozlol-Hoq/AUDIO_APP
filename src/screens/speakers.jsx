import { Image, SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { useDispatch, useSelector } from 'react-redux'
import { selectEarphones, selectSpeakers } from '../../store/productSlice'
import BannerTitle from '../components/banner-title'
import CategoryTitle from '../components/category-title'
import { colors, spacing } from '../theme'
import Button from '../components/button'
import Footer from '../components/footer'

export default function Speakers({navigation}) {
  const speakers = useSelector(selectSpeakers)
  
  return (
    <ScrollView>
      <SafeAreaView>
        <BannerTitle/>
        <CategoryTitle title="EarPhones"/>
        <View style={{margin:spacing[5]}}>
          {
            speakers.map((speaker,index) =>{
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
                      source={speaker.featuredImage.source}
                    />
                  </View>
                  <View style={{ marginVertical: spacing[5] }}>
                    <Text centered preset="h4">
                      {speaker.name}
                    </Text>
                    <Text centered uppercase preset="h4">
                      Speaker
                    </Text>
                    <Text
                      textColor="#919191"
                      centered
                      style={{
                        marginTop: spacing[5],
                        marginHorizontal: spacing[7],
                      }}
                    >
                      {speaker.description}
                    </Text>
                  </View>
                  <Button
                    onPress={() =>
                      navigation.navigate("Details", {
                        id: speaker.id,
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