const nock = require('nock')
const SoulHIU = require('../../dist')

const data = {

	"id": "vikram@sbx",
	"consent": {
		"purpose": {
			"text": "test",
			"code": "PATRQT",
			"refUri": "http://terminology.hl7.org/ValueSet/v3-PurposeOfUse"
		},
		"patient": {
			"id": "vikram@sbx"
		},
		"hip": {
			"id": "stl-hip-vikram"
		},
		"hiu": {
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
		"hiTypes": [
			"Prescription",
			"DiagnosticReport"
		],
		"permission": {
			"accessMode": "VIEW",
			"dateRange": {
				"from": "2020-10-18T12:00:22.014Z",
				"to": "2020-10-30T12:00:22.014Z"
			},
			"dataEraseAt": "2020-11-30T12:00:22.014Z",
			"frequency": {
				"unit": "HOUR",
				"value": 0,
				"repeats": 10
			}
		}
	}

}

describe('Consent request', () => {
	test('Create a new consent request', async () => {
		// Set up the mock request
		const scope = nock('https://dev.soul.technology/api/v1')
			.post('/hiu/consent/init', data)
			.reply(200, (uri, requestBody) => requestBody)

		// Make the request
		const soulHIUClient = new SoulHIU({
			apiKey: 'dummy',
			'X-Hip-Id': 'stl-hip-vikram'
		})
		await soulHIUClient.consentInit(data)

		// Assert that the expected request was made.
		scope.done()
	})
})