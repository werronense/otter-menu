import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  name: string;
  squidPercent: number;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: "name" | "squidPercent";
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
};

export const OrderSchema: ZodType<FormData> = z.object({
  name: z.string().min(1),
  squidPercent: z
    .number({ coerce: true })
    .min(1, { message: "Enter a number no lower than 1" })
    .max(100, { message: "Enter a number no higher than 100" }),
});
