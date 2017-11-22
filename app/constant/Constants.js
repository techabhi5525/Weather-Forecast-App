import keyMirror from 'keymirror';

let Constants = {
	API_CONSTANT: keyMirror({
		LOAD_DATA: null,
		LOAD_ATTRIBUTES: null
	}),
	ACTIONS_CONSTANT: keyMirror({}),
	EVENT_CONSTANT: keyMirror({
		DATA_LOADED: null
	})
}
export default Constants;
