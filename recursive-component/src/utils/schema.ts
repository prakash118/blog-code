import { z } from 'zod';

interface ExperienceSchema {
  name: string;
  time: string;
  position: string;
  children?: ExperienceSchema[];
}

export const experienceSchema: z.Schema<ExperienceSchema> = z.object({
  name: z.string(),
  time: z.string(),
  position: z.string(),
  children: z.lazy(() => experienceSchema.array()).optional(),
});

export type Experience = z.infer<typeof experienceSchema>;
