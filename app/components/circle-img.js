import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CircleImgComponent extends Component {
	@tracked defaultImg = 'octane-twitter/public/assets/default-avatar.png';
}
