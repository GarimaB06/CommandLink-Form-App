export type JobTitle = {
	id: string;
	options: string[];
	placeholder: string;
	type: string;
	level: string;
};

export type FieldObject = {
	id: string;
	placeholder?: string;
	required?: boolean;
	type: "text" | "select" | "textarea";
	options?: string[];
	level?: string;
	value?: string;
};

export interface PayloadType {
	id: string;
	value: string;
}

export interface FlattenedData {
	[key: string]: {
		id: string;
		level?: string;
		placeholder?: string;
		required?: boolean;
		type: "text" | "select" | "textarea";
		options?: string[];
		value?: string;
	};
}

export interface FieldObjectWithLevel {
	id: string;
}

export type FieldData = (FieldObject | FieldObject[])[];

export interface FormProps {
	data: {
		[key: string]: {
			id: string;
			type: string;
			placeholder?: string;
			level: string;
		};
	};
}

export type Hashmap = {
	[key: string]: string;
};
