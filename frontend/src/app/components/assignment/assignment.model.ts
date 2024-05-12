import { Module } from "../module/module.model";
export class Assignment {
    id: number;
    title: string;
    description: string;
    deadline: Date;
    module: Module;
    constructor(
        id: number,
        title: string,
        description: string,
        deadline: Date,
        module: Module,
      ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.module = module;
      }
}
  