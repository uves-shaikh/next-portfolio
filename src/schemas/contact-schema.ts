import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({
      message: "name is required",
    })
    .min(2)
    .max(50)
    .trim(),
  email: z.string().email({
    message: "Please enter valid email",
  }),
  message: z
    .string({
      message: "name is required",
    })
    .min(2)
    .max(10000)
    .trim(),
});
