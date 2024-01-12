import { FlatList, SafeAreaView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import UButtons from '../../molecules/uButtons/uButtons'
import UTexts from '../../molecules/uTexts/uTexts'
import { Dates } from '../../metarials/dates'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UDataPicker from '../../atoms/uDataPicker/uDataPicker'
import UList from '../../atoms/uList/uList'
import UImage from '../../atoms/uImage/uImage'
import DatePickerWithText from '../../molecules/datePickerWithText/datePickerWithText'
import { useSelector, useDispatch } from 'react-redux'
import { getControlArray, getPriceCount, getWorkCount, getWorkedDayList, remove, setControlArray, setDayCount, setPriceCount, setWorkedDayList } from '../../../redux/countSlice'
import { Style } from './style'

const MainPage = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState()
  const [selectedDate, setSelectedDate] = useState()
  const [selectedMonth, setSelectedMonth] = useState()
  const [allDay, setAllDay] = useState("")
  const [controlState, setControlState] = useState(false)

  const { workCount, priceCount, workedDayList, controlArray } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    sendWorkList()
    sendControlArray()
  }, [priceCount, workCount, workedDayList,controlArray])

  useEffect(() => {
    if (selectedDate == undefined) { }
    else { setAllDay(`${selectedDate} ${selectedMonth} ${selectedDay}`) }
  }, [controlState, selectedDate, selectedMonth, selectedDay])

  useEffect(() => {
    getWorkList()
    getWorkedList()
    getControlList()
  }, [])

  const sendWorkList = async () => {
    await AsyncStorage.setItem('price', priceCount.toString())
    await AsyncStorage.setItem('count', workCount.toString())
    await AsyncStorage.setItem("worklist", JSON.stringify(workedDayList))
    await AsyncStorage.setItem('control', JSON.stringify(controlArray))
  }

  const sendControlArray = async () => {
    
  }

  const getWorkList = async () => {
    dispatch(getPriceCount(parseInt(await AsyncStorage.getItem('price'))))
    dispatch(getWorkCount(parseFloat(await AsyncStorage.getItem('count'))))
    dispatch(getControlArray(JSON.parse(await AsyncStorage.getItem('control'))))


  }
  const getControlList = async () => {
    const getDayList = await AsyncStorage.getItem("control")
    const jsonGetDayList = JSON.parse(getDayList)
    dispatch(getControlArray(jsonGetDayList))
  }

  const getWorkedList = async () => {
    //await AsyncStorage.removeItem("workListtt");
    const getList = await AsyncStorage.getItem("worklist")
    const jsongetList = JSON.parse(getList)
    dispatch(getWorkedDayList(jsongetList))
  }

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.textsStyle}>
        <UTexts priceText={priceCount} countText={workCount} />
      </View>
      <View style={Style.datePickerStyle}>

        <DatePickerWithText onPress={() => setOpen(true)} dateText={allDay} />
      </View>
      <View style={Style.buttonsStyle}>
        <UButtons
          onPressFirstButton={() => {
            if (selectedDate == null) {
              setAllDay("Tarih Giriniz !")
            }
            else if (controlArray.find(s => s == `${selectedDate}${selectedMonth}`) == `${selectedDate}${selectedMonth}`) {
              setAllDay("Bu Tarih Eklenmiş !")
            } else {
              dispatch(setDayCount(1))
              dispatch(setPriceCount(450))
              dispatch(setWorkedDayList({ _day: selectedDay, _month: selectedMonth, _date: selectedDate, workCount: 1 }))
              dispatch(setControlArray(`${selectedDate}${selectedMonth}`))
              setAllDay()
            }

          }}
          onPressSecondButton={() => {
            if (selectedDate == null) {
              setAllDay("Tarih Giriniz !")
            }
            else if (controlArray.find(s => s == `${selectedDate}${selectedMonth}`) == `${selectedDate}${selectedMonth}`) {
              setAllDay("Bu Tarih Eklenmiş !")
            } else {
              dispatch(setDayCount(.5))
              dispatch(setPriceCount(225))
              dispatch(setWorkedDayList({ _day: selectedDay, _month: selectedMonth, _date: selectedDate, workCount: 0.5 }))
              dispatch(setControlArray(`${selectedDate}${selectedMonth}`))
              setAllDay()
            }
          }}
        />
      </View>
      <UDataPicker date={date} isOpen={open} onCancel={() => {
        setOpen(false)
      }} onConfirm={(date) => {
        setOpen(false)
        setDate(date)
        setSelectedDate(date.getDate())
        setSelectedDay(Dates.Days[date.getDay()].tr)
        setSelectedMonth(Dates.Months[date.getMonth()].tr)
        setControlState(true)
      }} />

      <View style={{ flex: 6 }}>
        <FlatList
          data={workedDayList}
          renderItem={({ item }) => {
            return (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <UList dayName={item._day} dayNumber={item._date} monthName={item._month} dailyWorkCount={item.workCount} />
              </View>
            )
          }} />

      </View>
      <UImage onPress={() => {
        dispatch(remove())
      }} />
    </SafeAreaView>
  )
}

export default MainPage