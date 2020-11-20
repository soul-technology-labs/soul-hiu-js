export type ConsentFilter = {
	limit?: string,
}

export type Patient = {
	id: string
}

export type HIU = {
	id: string
}

export type HIP = {
	id: string
}

export type Purpose = {
	text: string,
	code: string,
	refUri: string,
}

export type Requester = {
	name: string,
	identifier: {
		type: string,
		value: string,
		system: string
	}
}

export type Permission = {
	accessMode: string,
	dateRange: {
		from: string,
		to: string,
	}
	dataEraseAt: string,
	frequency: {
		unit: string,
		value: number,
		repeats: number
	}
}

export type Consent = {
	consent: {
		purpose: Purpose,
		patient: Patient,
		hiu: HIU,
		hip: HIP,
		requester: Requester,
		hiTypes: Array<string>
		permission: Permission
	}

}


export type Status = {
	status: string;
	consentId: string;
	consentArtefactId: {
		id: string
	}
}