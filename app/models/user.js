import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class UserModel extends Model {
	@attr('string') name;
	@attr('string') username;
	@attr('string') bio;
	@attr('date') createdAt;

	@hasMany('tweet') tweets;
}
