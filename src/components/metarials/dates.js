export const Dates = {
    Days: [
        { id: 0, tr: "Pazar", en: "Sun" },
        { id: 1, tr: "Pazartesi", en: "Mon" },
        { id: 2, tr: "Salı", en: "Tue" },
        { id: 3, tr: "Çarşamba", en: "Wed" },
        { id: 4, tr: "Perşembe", en: "Thu" },
        { id: 5, tr: "Cuma", en: "Fri" },
        { id: 6, tr: "Cumartesi", en: "Sat" }
    ],
    Months: [
        { id: 0, tr: "Ocak", en: "Jan" },
        { id: 1, tr: "Şubat", en: "Feb" },
        { id: 2, tr: "Mart", en: "Mar" },
        { id: 3, tr: "Nisan", en: "Apr" },
        { id: 4, tr: "Mayıs", en: "May" },
        { id: 5, tr: "Haziran", en: "Jun" },
        { id: 6, tr: "Temmuz", en: "Jul" },
        { id: 7, tr: "Ağustos", en: "Aug" },
        { id: 8, tr: "Eylül", en: "Sep" },
        { id: 9, tr: "Ekim", en: "Oct" },
        { id: 10, tr: "Kasım", en: "Nov" },
        { id: 11, tr: "Aralık", en: "Dec" }
    ]
}

export const CurrentDates = {
    dayName: Dates.Days[new Date().getDay()],
    dayNumber: new Date().getDate(),
    monthName: Dates.Months[new Date().getMonth()]
}
