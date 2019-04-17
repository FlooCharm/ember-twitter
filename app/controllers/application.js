import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import moment from 'moment';

export default class ApplicationController extends Controller {
	@tracked name;

	@action
	onChangeName(text) {
		this.name = text;
	}

	@action
	onSubmit(text) {
		let newTweet = {
			avatar: 'https://raw.githubusercontent.com/FlooCharm/tweet-app/master/src/assets/cuac.PNG',
			createdAt: new Date(),
			description: text,
			userName: this.name
		}
		this.store.createRecord('draftTweet', newTweet).save();
	}

	@action
	deleteTweet(tweet) {
		if(confirm('Are you sure you want to delete this tweet?')) {
			tweet.destroyRecord();
		}
	}
}
