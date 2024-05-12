import { Module } from "../module/module.model";
export interface Resource {
    id: number;
    title: string;
    description: string;
    type: string;
    link: string;
    module: Module;
}
  