import Controller from '@ember/controller';
import { action } from '@ember/object';
import moment from 'moment';

export default class ApplicationController extends Controller {
	@action
	onSubmit(text) {
		let newTweet = {
			createdAt: new Date(),
			description: text,
			userId: 1
		}
		this.store.createRecord('tweet', newTweet).save();
	}

}
