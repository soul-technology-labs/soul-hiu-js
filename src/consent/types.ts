export type ConsentFilter = {
	limit?: string,
}

export type Purpose = {
	text: string,
	code: string,
	refUri: string,
}

export type Requestor = {
	name: string,
	type: string,
	value: string,
	system: string
}

export type Permission = {
	accessMode: string,
	from: Date,
	to: Date,
	eraseAt: Date,
	unit: string,
	value: string,
	repeats: string
}

export type Consent = {
	healthId: string,
	purpose: Purpose,
	requestor: Requestor,
	hiTypes: Array<string>
	permission: Permission
}