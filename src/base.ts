import fetch from 'isomorphic-unfetch'

type Config = {
	apiKey: string,
	basePath?: string
	//HiuId: string
}

export abstract class Base {
	private apiKey: string
	private basePath: string

	constructor(config: Config) {
		this.apiKey = config.apiKey
		this.basePath = config.basePath || 'https://dev.soul.technology/api/v1'
		//this.HiuId = 'stl-hiu-vikram'
	}

	protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
		const url = this.basePath + endpoint

		const headers = {
			'api-key': this.apiKey,
			'X-Hip-Id': 'stl-hip-vikram',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}

		const config = {
			...options,
			headers
		}

		return fetch(url, config).then(r => {
			if (r.ok) {
				return r.json();
			}
			throw new Error(r.statusText)
		})
	}

}