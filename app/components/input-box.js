import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputBoxComponent extends Component {
	@tracked text;
	@tracked error;

	@action
	handleChange(text) {
		this.text = text;
		this.error = false;
	}

	@action
	async handleSubmit() {
		// if(this.args.onSubmit) {
			let newText = this.text;
			// let req = await this.args.onSubmit(newText);
			// this.error = req.error;
			this.text = '';
		// }
		// else
		// 	alert('handleSubmit');	
	}	
}