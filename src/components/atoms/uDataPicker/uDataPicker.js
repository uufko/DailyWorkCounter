import { View } from 'react-native'
import DatePicker from 'react-native-date-picker'
const UDataPicker = ({ isOpen, date,onConfirm,onCancel }) => {
    return (
        <View>
            <DatePicker
                modal mode='date' theme='dark' cancelText='İptal' confirmText='Seç'
                open={isOpen}
                date={date}
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </View>
    )
}

export default UDataPicker