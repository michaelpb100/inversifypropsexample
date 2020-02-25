import { container, cid } from "inversify-props";
// import "reflect-metadata";
import { ITest } from "@/services/ITest";
import { Test1 } from "@/services/impl/Test1";
import { Test2 } from "@/services/impl/Test2";

export function buildDevDependencyContainer(): void {
  container.addSingleton<ITest>(Test1, "ITest");
}

export function buildProductionDependencyContainer(): void {
  container.addSingleton<ITest>(Test2, "ITest");
}
