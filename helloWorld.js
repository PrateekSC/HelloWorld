import { LightningElement, wire, track } from "lwc";

export default class HelloWorld extends LightningElement {
  greeting = "Hello World!";

  connectedCallback() {}

  disconnectedCallback() {}

  greetingChangeHandler(event) {
    this.greeting = event.target.value;
  }
}
