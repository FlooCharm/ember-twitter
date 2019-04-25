import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

import sha1 from 'js-sha1';
import Identicon from 'identicon.js';

export default class UserModel extends Model {
	@attr('string') name;
	@attr('string') username;
	@attr('string') bio;
	@attr('date') createdAt;

	@hasMany('tweet') tweets;

	get avatar() {
		let hash = sha1(this.username);
		let data = new Identicon(hash, 420).toString();
		return `data:image/png;base64,${data}`;
		// document.write('<img width=420 height=420 src="data:image/png;base64,' + data + '">');
	}
}
