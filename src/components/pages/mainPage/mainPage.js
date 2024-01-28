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
import { getControlArray, getPriceCount, getWorkCount, getWorkedDayList, remove, setControlArray, setDayCount, setPriceCount, setPriceState, setWorkedDayList } from '../../../redux/countSlice'
import { Style } from './style'
import AlertWindow from '../../organisms/alertWindow/alertWindow'
import { UserDevice } from '../../metarials/userDevice'
import { Images } from '../../metarials/images'
import PriceState from '../../organisms/priceState/priceState'

const MainPage = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState()
  const [selectedDate, setSelectedDate] = useState()
  const [selectedMonth, setSelectedMonth] = useState()
  const [allDay, setAllDay] = useState("")
  const [controlState, setControlState] = useState(false)
  const [deleteWindow, setDeleteWindow] = useState(false)
  const [priceWindow, setPriceWindow] = useState(false)

  const { workCount, priceCount, workedDayList, controlArray, priceState } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    sendWorkList()
  })


  useEffect(() => {
    if (selectedDate == undefined) { }
    else { setAllDay(`${selectedDate} ${selectedMonth} ${selectedDay}`) }
  }, [controlState, selectedDate, selectedMonth, selectedDay])

  useEffect(() => {
    getPrice()
    getCount()
    getControlList()
    getWorkedList()
    getPriceState()
  }, [])

  const sendWorkList = async () => {
    await AsyncStorage.setItem("price", priceCount.toString())
    await AsyncStorage.setItem('count', workCount.toString())
    await AsyncStorage.setItem('control', JSON.stringify(controlArray))
    await AsyncStorage.setItem("worklist", JSON.stringify(workedDayList))
    await AsyncStorage.setItem("priceState", priceState.toString())
  }

  const getPrice = async () => { dispatch(getPriceCount(parseInt(await AsyncStorage.getItem("price")))) }
  const getCount = async () => { dispatch(getWorkCount(parseFloat(await AsyncStorage.getItem('count')))) }
  const getControlList = async () => { dispatch(getControlArray(JSON.parse(await AsyncStorage.getItem("control")))) }
  const getWorkedList = async () => { dispatch(getWorkedDayList(JSON.parse(await AsyncStorage.getItem("worklist")))) }
  const getPriceState = async () => {dispatch(setPriceState(parseInt(await AsyncStorage.getItem("priceState"))))}

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
              setAllDay("Tarih Seçiniz !")
            }
            else if (controlArray.find(s => s == `${selectedDate}${selectedMonth}`) == `${selectedDate}${selectedMonth}`) {
              setAllDay("Bu Tarih Eklenmiş !")
            } else {
              dispatch(setDayCount(1))
              dispatch(setPriceCount(priceState))
              dispatch(setWorkedDayList({ _day: selectedDay, _month: selectedMonth, _date: selectedDate, workCount: 1 }))
              dispatch(setControlArray(`${selectedDate}${selectedMonth}`))
              setAllDay()
            }

          }}
          onPressSecondButton={() => {
            if (selectedDate == null) {
              setAllDay("Tarih Seçiniz !")
            }
            else if (controlArray.find(s => s == `${selectedDate}${selectedMonth}`) == `${selectedDate}${selectedMonth}`) {
              setAllDay("Bu Tarih Eklenmiş !")
            } else {
              dispatch(setDayCount(.5))
              dispatch(setPriceCount(priceState/2))
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

      <View style={Style.flatListStyle}>
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
      <UImage source={Images.moneyIcon} right={15} top={15} height={UserDevice.deviceHeight * .04} width={UserDevice.deviceHeight * .04}
        text={priceState}
        onPress={() => { setPriceWindow(true) }} />
      <UImage source={Images.trashIcon} right={10} bottom={5} height={UserDevice.deviceHeight * .09} width={UserDevice.deviceHeight * .09}
        onPress={() => { setDeleteWindow(true) }} />

        {priceWindow && <View style={Style.absoluteViewStyle}>
          <PriceState 
          value={priceState}
          onChange={(e)=>{
            dispatch(setPriceState(e))
          }}
          onPress={()=>{
            setPriceWindow(false)
            }}/>
          </View>}


      {deleteWindow && <View style={Style.absoluteViewStyle}>
        <AlertWindow
          noButton={() => setDeleteWindow(false)}
          yesButton={() => {
            dispatch(remove())
            setDeleteWindow(false)
          }} />
      </View>}
    </SafeAreaView>
  )
}

export default MainPage