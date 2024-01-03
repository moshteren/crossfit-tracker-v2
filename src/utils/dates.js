import dayjs from "dayjs";

export const timestampToString = (timestamp, format) => {
	try {
		if (timestamp) {
			return dayjs(timestamp.toDate()).format(format);
		} else {
			return "No date";
		}
	} catch (err) {
		console.error(err);
	}
};
