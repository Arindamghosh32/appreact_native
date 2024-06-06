import { View, Text,TouchableOpacity } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';


export default function Bookingmodal({onclose}) {
    const [selectedDate, setSelectedDate] = useState(null); 
    const onDayPress = (day) => {
        setSelectedDate(day.dateString); // Update selected date
      };
    
  return (
    <LinearGradient colors={['#FFEFBA','#FFFFFF']}>
      <TouchableOpacity onPress={onclose}>
      <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <Text style={{fontSize:24,padding:10}}>Calender</Text>
      </View>
      <View>
      <Calendar
          // Customize styles as needed
          style={{ borderRadius: 10, elevation: 18, margin: 20 }}
          // Set `markedDates` prop to highlight selected date
          markedDates={{
            [selectedDate]: {
              selected: true, // Mark the selected date as selected
              selectedColor: '#FFEFBA', // Set the background color for selected date
              selectedTextColor: 'white', // Set the text color for selected date
            },
          }}
          onDayPress={onDayPress}
        />
      </View>
      </LinearGradient>
  )
}