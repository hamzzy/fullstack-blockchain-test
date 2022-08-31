import { errorCodes, getMessageFromCode } from 'eth-rpc-errors'

function getErrorMessage(e: any) {
	// eslint-disable-next-line no-param-reassign
	if(e.error) {
		e = e.error
	}

	let message = ''
	if(e.code === errorCodes.rpc.internal) {
		if(e?.data?.message) {
			message = e?.data?.message
		} else {
			message = e?.message
		}

		console.log('Internal error: ', e)
	} else {
		console.log('General error: ', e)
		message = getMessageFromCode(e?.code, e?.message)
	}

	console.log('Message: ', message)
	return message
}

export default getErrorMessage
