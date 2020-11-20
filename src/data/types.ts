export type ConsentId = {
	id: string,
}

export type DataRequest = {
	status: string,
	requestId: string
}

export interface Response {
	data?: (DataEntity)[] | null;
}
export interface DataEntity {
	requestId: string;
	status: string;
}

export type HiData = {
	status: string,
	id: string,
	records: any[]
}

