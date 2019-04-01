import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class InputBoxComponent extends Component {
	@tracked text;

	@action
	handleChange(text) {
		this.text = text;
	}

	@action
	handleSubmit() {
		let newText = this.text;
		if(this.args.onSubmit)
			this.args.onSubmit(newText);
		else
			alert('handleSubmit');	
	}	
}