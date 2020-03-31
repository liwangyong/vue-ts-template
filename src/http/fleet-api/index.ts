import {AxiosPromise} from 'axios'
import $axios from '@/http/api'
class FleetApi {
	get<URL extends keyof ICartAPI, T>(url: URL, params: T): AxiosPromise<ICartAPIParams[URL]> {
		return $axios.request({
			url,
			params,
			method: 'get',
		})
	}
}
export default new FleetApi()
