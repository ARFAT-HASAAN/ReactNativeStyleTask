import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import Text from './src/components/Text'
import Covid from './src/screen/Covid'

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSansRegular: require('./src/fonts/JosefinSans-Regular.ttf'),
    JosefinSansBold: require('./src/fonts/JosefinSans-Bold.ttf'),
    JosefinSansThin: require('./src/fonts/JosefinSans-Thin.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <Covid />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
