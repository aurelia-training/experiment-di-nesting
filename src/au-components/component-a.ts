import {inject, customElement} from "aurelia-framework";
import {App} from "../app";

@inject(App)
@customElement("au-component-a")
export class ComponentA {

  constructor(public app:App) {}
  
}
