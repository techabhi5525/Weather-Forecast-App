import Superagent from 'superagent';

let Request = {
	get(url) {
		return new Promise((resolve, reject) => {
			Superagent.get(url)
   			.end(function(err, res) {
				err ? reject(res.body, err) : resolve(res.body, res);
			})
		});
	}
}
export default Request;