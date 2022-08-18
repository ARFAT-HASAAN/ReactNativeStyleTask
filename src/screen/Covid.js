import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  StatusBar,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import Text from '../components/Text'
import { colors } from '../Theme/colors'
import { spacing } from '../Theme/Spacing'
import manu from '../assets/menu.png'
import Bell from '../assets/bell.png'
import USA from '../assets/USA.png'
import Call from '../assets/phoneVector.png'
import msg from '../assets/message-circle.png'
import mask from '../assets/WearMask.png'
import close from '../assets/coloseContact.png'
import Handwash from '../assets/handWash.png'
import Gril from '../assets/girl.png'

export default function Covid() {
  return (
    <View style={styles.container}>
      {/* view one  */}

      <View style={styles.viewOne}>
        {/* icons  */}
        <View style={styles.viewOneBar}>
          <Image source={manu} />
          <Image source={Bell} />
        </View>
        {/* header  */}
        <View style={styles.viewOneBar}>
          <Text style={{ color: colors.white }} preset="h1">
            Covid
          </Text>
          <View
            style={{
              width: 150,
              padding: spacing[2],
              borderRadius: 20,
              backgroundColor: colors.white,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                borderRadius: 10,
              }}
              source={USA}
            />
            <Text preset="h4">USA</Text>
            <AntDesign name="caretdown" size={20} color="black" />
          </View>
        </View>

        {/* text  */}
        <View style={{ marginVertical: 20 }}>
          <Text preset="h1" style={{ color: colors.white, marginVertical: 10 }}>
            Are felling sick
          </Text>
          <Text
            preset="default"
            style={{ color: colors.Lightwhite, fontSize: 22 }}
          >
            if you feel sick with any of covid symtomps please call or SMS us
            for immediate help.{' '}
          </Text>
        </View>

        {/* buttons  */}

        <View style={styles.viewOneBar}>
          <TouchableHighlight
            // onPress={ }
            // onLongPress={ }
            underlayColor="white"
          >
            <View style={styles.callBtn}>
              <Image source={Call} />
              <Text preset="h4" style={{ color: colors.Lightwhite }}>
                Call Now
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            // onPress={ }
            // onLongPress={ }
            underlayColor="white"
          >
            <View style={styles.MsgBtn}>
              <Image style={{ marginRight: 3 }} source={msg} />
              <Text preset="h4" style={{ color: colors.Lightwhite }}>
                Send SMS
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.viewTwo}>
        <Text preset="h3"> Prevention </Text>

        {/* prevention view  */}

        <View style={styles.preventView}>
          <View style={{ width: 100 }}>
            <Image source={close} />
            <Text style={{ textAlign: 'center' }}>Avoid Close contact </Text>
          </View>
          <View style={{ width: 100, margin: 'auto' }}>
            <Image source={Handwash} />
            <Text style={{ textAlign: 'center' }}>Avoid Close contact </Text>
          </View>
          <View style={{ width: 100, textAlign: 'center' }}>
            <Image source={mask} />
            <Text style={{ textAlign: 'center' }}>Avoid Close contact </Text>
          </View>
        </View>

        {/* test section  */}

        <View style={styles.TestSection}>
          <Image style={{ marginTop: -10 }} source={Gril} />
          <View style={{ marginLeft: 10 }}>
            <Text preset="h2" style={{ color: colors.Lightwhite }}>
              Do your own test!{' '}
            </Text>
            <View style={{ flexDirection: 'column' }}>
              <Text
                preset="small"
                style={{
                  color: colors.Lightwhite,
                  fontSize: 15,
                  width: 200,
                }}
              >
                Folow this instructions to do your own test.{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  viewOne: {
    backgroundColor: colors.pink,
    paddingHorizontal: spacing[5],
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
  },

  viewOneBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing[5],
  },

  viewOneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  callBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: colors.orange,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[2],
  },
  MsgBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: colors.blue,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[2],
  },

  viewTwo: {
    padding: spacing[5],
  },

  preventView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[4],
  },

  TestSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: colors.pink,
  },
})
