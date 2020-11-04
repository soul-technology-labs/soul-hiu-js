import { DataRequest } from './types'
import { Base } from '../base'

const resourceName = "hiu/data"

export class Data extends Base {
	dataInit(id: string) {
		return this.request<DataRequest>(`${resourceName}/init`, {
			method: 'POST',
			body: JSON.stringify({ id: id })
		})
	}

}