import { createI18n } from 'vue-i18n'
import zh_cn from "../language/zh_cn.json"
import en_us from "../language/en_us.json"
import ru_ru from "../language/ru_ru.json"

const i18n = createI18n({
    locale: 'en_us',
    fallbackLocale: 'en_us',
    messages: {
        en_us
    },
})

window.$t = i18n.global.t

export default i18n
