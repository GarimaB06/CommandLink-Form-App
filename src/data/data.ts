import { FieldData } from "../types/types";

export const FIELD_DATA: FieldData = [
	[
		{
			id: "firstName",
			placeholder: "First name",
			required: true,
			type: "text",
		},
		{
			id: "lastName",
			placeholder: "Last name",
			required: true,
			type: "text",
		},
	],
	{
		id: "Email",
		required: true,
		type: "text",
	},
	{
		id: "address1",
		placeholder: "Address 1",
		type: "text",
	},
	[
		{
			id: "city",
			type: "text",
		},
		{
			id: "state",
			type: "text",
		},
		{
			id: "zip",
			type: "text",
		},
	],
	{
		id: "phone",
		required: true,
		type: "text",
	},
	{
		id: "jobTitle",
		options: [
			"Engineer - lead",
			"Engineer - mid level",
			"Engineer - junior",
			"Engineer - front end focused",
			"Engineer - backend focused",
			"Engineer - full stack",
		],
		placeholder: "Please select job title",
		type: "select",
	},
	{
		id: "reason",
		placeholder:
			"Describe why you are a good fit for the job you are applying for.",
		type: "textarea",
	},
];

export const flatData = {
	Email: { id: "Email", required: true, type: "text", level: "1" },

	address1: {
		id: "address1",
		placeholder: "Address 1",
		type: "text",
		level: "2",
	},
	city: { id: "city", type: "text", level: "3_0" },
	firstName: {
		id: "firstName",
		placeholder: "First name",
		required: true,
		type: "text",
		level: "0_0",
	},
	jobTitle: {
		id: "jobTitle",
		options: Array(6),
		placeholder: "Please select job title",
		type: "select",
		level: "5",
	},
	lastName: {
		id: "lastName",
		placeholder: "Last name",
		required: true,
		type: "text",
		level: "0_1",
	},
	phone: { id: "phone", required: true, type: "text", level: "4" },
	reason: {
		id: "reason",
		placeholder:
			"Describe why you are a good fit for the job you are applying for.",
		type: "textarea",
		level: "6",
	},
	state: { id: "state", type: "text", level: "3_1" },
	zip: { id: "zip", type: "text", level: "3_2" },
};
