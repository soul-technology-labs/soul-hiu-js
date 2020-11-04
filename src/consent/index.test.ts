const nock = require('nock')
const SoulHIU = '../../dist'

const data = {

}

describe('Consent request', () => {
	test('Create a new consent request', async () => {
		// Set up the mock request
		const scope = nock('https://dev.soul.technology/api/v1/')
			.post('/hiu/consent/init')
			.reply(200, [data])

		// Make the request
		const DevToClient = new DevTo({ apiKey: '' })
		await DevToClient.consentInit()

		// Assert that the expected request was made.
		scope.done()
	})
})