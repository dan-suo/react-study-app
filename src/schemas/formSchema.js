import { z } from "zod";

// Пример схемы для формы регистрации
export const registerSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z
    .string()
    .min(6, "Пароль должен быть не менее 6 символов")
    .max(20, "Пароль не должен превышать 20 символов"),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласие с условиями",
  }),
});
