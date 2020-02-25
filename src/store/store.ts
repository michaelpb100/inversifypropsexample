import { State, Mutation, Action } from "vuex-simple";
import { container, cid } from "inversify-props";
import { ITest } from "@/services/ITest";
export class Store {
  private testService!: ITest;

  constructor() {
    this.testService = container.get<ITest>("ITest");
  }

  @State()
  public version = "0.0.1";
  @State()
  public testString = "";

  @Mutation()
  private updateTest(test: string) {
    this.testString = test;
  }

  @Action()
  public forceTest() {
    const data = this.testService.getText();
    this.updateTest(data);
  }
}
