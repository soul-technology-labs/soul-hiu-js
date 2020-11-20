import { DataRequest, Response, HiData } from './types'
import { Base } from '../base'

const resourceName = "/hiu/data"

export class Data extends Base {
	dataInit(id: string, fromDate: string, toDate: string) {
		return this.request<DataRequest>(`${resourceName}/init`, {
			method: 'POST',
			body: JSON.stringify({ consentId: id, from: fromDate, to: toDate })
		})
	}

	dataRequestList(id: string) {
		return this.request<Response>(`${resourceName}/list/${id}`)
	}

	dataFetch(id: string) {
		return this.request<HiData>(`${resourceName}/fetch`, {
			method: 'POST',
			body: JSON.stringify({ requestId: id })
		})
	}

}