import { Module } from "../module/module.model";
export interface Technology {
    id: number;
    name: string;
    description: string;
    modules: Module[];
}
  