import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class TweetModel extends Model {
	// @attr('string') userName;
	// @attr('string') description;
	@attr('date') createdAt;
	// @attr('string') avatar;
	// @attr('number') userId;

	@attr('string') description;

	@belongsTo('user') user;
}
