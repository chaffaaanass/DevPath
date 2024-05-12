import { Module } from "../module/module.model";
export interface Project {
    id: number;
    name: string;
    description: string;
    deadline: Date;
    module: Module;
}
  