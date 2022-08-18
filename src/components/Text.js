import { View, Text as CostomText, StyleSheet } from 'react-native'
import React from 'react'
import { presets } from './text.preset'

export default function Text({ children, preset = 'default', style }) {
  const textStyle = StyleSheet.compose(presets[preset], style)

  return (
    <View>
      <CostomText style={textStyle}>{children}</CostomText>
    </View>
  )
}
