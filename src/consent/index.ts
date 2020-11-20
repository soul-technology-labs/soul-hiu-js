import qs from 'querystringify'
import { Consent, ConsentFilter, Status } from './types'
import { Base } from '../base'
import moment from 'moment'

const resourceName = "/hiu/consent"

export class Consents extends Base {
	consentInit(formData) {
		var consent: Consent = {
			"consent": {
				"purpose": {
					"text": "test",
					"code": "PATRQT",
					"refUri": "http://terminology.hl7.org/ValueSet/v3-PurposeOfUse"
				},
				"patient": {
					"id": formData.healthId
				},
				"hiu": {
					"id": "stl-hiu-vikram"
				},
				"hip": {
					"id": "stl-hiu-vikram"
				},
				"requester": {
					"name": "Dr.Manju",
					"identifier": {
						"type": "REGNO",
						"value": "MH1001",
						"system": "https://www.mciindia.org"
					}
				},
				"hiTypes": formData.checkbox,
				"permission": {
					"accessMode": "VIEW",
					"dateRange": {
						"from": moment(formData.fromDate).toISOString(),
						"to": moment(formData.toDate).toISOString(),
					},
					"dataEraseAt": moment(formData.expiry).toISOString(),
					"frequency": {
						"unit": "HOUR",
						"value": 0,
						"repeats": 0
					}
				}
			}
		}

		return this.request<Consent>(`${resourceName}/init`, {
			method: 'POST',
			body: JSON.stringify(consent)
		})
	}

	consentStatus(id: number) {
		return this.request<Status>(`${resourceName}/status/${id}`)
	}

	consentList(id: string) {

		return this.request<string[]>(`${resourceName}/list/${id}`)
	}
}