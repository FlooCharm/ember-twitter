import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import moment from 'moment';

export default class AppIndexController extends Controller {
	@tracked name;

	@action
	onChangeName(text) {
		this.name = text;
	}

	@action
	onSubmit(text) {
		let user = this.store.peekRecord('user', 1);
		
		let newTweet = this.store.createRecord('tweet', {
			description: text
		});
		newTweet.set('user', user);
		newTweet.save();
		
		// let newTweet = {
		// 	avatar: 'https://raw.githubusercontent.com/FlooCharm/tweet-app/master/src/assets/cuac.PNG',
		// 	description: text,
		// 	username: this.name
		// }
		// this.store.createRecord('tweet', newTweet).save();
	}

	@action
	deleteTweet(tweet) {
		if(confirm('Are you sure you want to delete this tweet?')) {
			tweet.destroyRecord();
		}
	}
}
