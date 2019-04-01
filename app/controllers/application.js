import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
	@tracked tweets = [{
		id: 1,
		username: 'wa',
		description: 'hola'
	}, {
		id: 2,
		username: 'wa',
		description: 'cuac'
	}, {
		id: 3,
		username: 'wa',
		description: 'wa'
	}];

	@action
	onSubmit() {
		console.log('wa')
	}

}
