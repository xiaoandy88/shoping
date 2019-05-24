import jsonp from '@/assets/js/jsonp'
import { commonParams, options } from './config'

export function getBannerList() {
    const url = 'https://mce.mogucdn.com/jsonp/multiget/3'

    const data = Object.assign({}, commonParams, {
        appPlat: 'm',
        pids: 136556
    })

    return jsonp(url, data, options)
}

export function getTabBarList() {
    const url = 'https://mce.mogucdn.com/jsonp/multiget/3'

    const data = Object.assign({}, commonParams, {
        appPlat: 'm',
        pids: 127180
    })

    return jsonp(url, data, options)
}
