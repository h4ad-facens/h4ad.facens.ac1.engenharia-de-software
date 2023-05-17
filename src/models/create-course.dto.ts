import { number, object, string, infer as ZodInfer } from "zod";

export const CreateCourseDTOValidator = object({
  name: string().nonempty().max(256),
  price: number().min(0),
});

export type CreateCourseDTO = ZodInfer<typeof CreateCourseDTOValidator>;
