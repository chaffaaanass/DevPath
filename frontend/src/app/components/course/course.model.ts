import { Module } from '../module/module.model';
export class Course {
  id: number;
  title: string;
  description: string;
  modules: Module[];
  constructor(
    id: number,
    title: string,
    description: string,
    modules: Module[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.modules = modules;
  }
}
