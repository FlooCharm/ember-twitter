import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppIndexRoute extends Route {
	// model() {
	// 	return this.store.findAll('tweet');
	// }

	model() {
		return hash({
			tweets: this.store.findAll('tweet'),
			users: this.store.findAll('user')
		})
	}
}
