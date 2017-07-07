import {inject} from "aurelia-framework";
import {NonSingletonClass} from "./non-singleton-class";

@inject(NonSingletonClass)
export class App {

  testDataItem = "Hello, World!";

  constructor(public nscInjected:NonSingletonClass) {}
  nscInstantiated:NonSingletonClass = new NonSingletonClass();

}
