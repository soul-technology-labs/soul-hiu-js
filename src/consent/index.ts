import qs from 'querystringify'
import { Consent, ConsentFilter } from './types'
import { Base } from '../base'

const resourceName = "hiu/consent"

export class Consents extends Base {
	consentInit(params: Consent) {
		return this.request<Consent>(`${resourceName}/init`, {
			method: 'POST',
			body: JSON.stringify({ consent: params })
		})
	}

	consentStatus(id: number) {
		return this.request<Consent>(`${resourceName}/${id}`)
	}

	consentList(params?: ConsentFilter) {
		let query = `${resourceName}`
		if (params) {
			query += qs.stringify(params, '?')
		}
		return this.request<Consent[]>(query)
	}
}