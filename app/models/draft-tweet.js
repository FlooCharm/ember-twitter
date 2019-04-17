import DS from 'ember-data';
const { Model, attr } = DS;

export default class DraftTweetModel extends Model {
	@attr('string') userName;
	@attr('string') description;
	@attr('date') createdAt;
	@attr('string') avatar;
	@attr('number') userId;
}
