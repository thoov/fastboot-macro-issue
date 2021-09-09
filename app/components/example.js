import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ExampleComponent extends Component {
  // Will load the service defined in: app/services/shopping-cart.js
  @service foo;
}
