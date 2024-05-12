import { Course } from "../course/course.model";
import { Assignment } from "../assignment/assignment.model";
import { Resource } from "../resource/resource.model";
import { Project } from "../project/project.model";
import { Technology } from "../technology/technology.model";

export class Module {
    id: number;
    title: string;
    description: string;
    course: Course;
    assignments: Assignment[];
    resources: Resource[];
    projects: Project[];
    technologies: Technology[];
    constructor(
        id: number, title: string, description: string, course: Course,
        assignments: Assignment[], resources: Resource[], projects: Project[], technologies: Technology[]
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.course = course;
        this.assignments = assignments;
        this.resources = resources;
        this.projects = projects;
        this.technologies = technologies;
    }
}
  