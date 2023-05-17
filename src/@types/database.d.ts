import { Env } from "hono";

export interface CloudflareEnv extends Env {
  DB: D1Database;
}

export interface CourseTable {
  id: string;
  name: string;
  price: number;
}

export interface Database {
  Courses: CourseTable;
}
