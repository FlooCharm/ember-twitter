import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SideBarComponent extends Component {
	@tracked text;

	@action
	handleChange(text) {
		this.args.onChangeText(text);
	}
}
