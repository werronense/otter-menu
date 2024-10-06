import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  name: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: "name";
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
};

export const OrderSchema: ZodType<FormData> = z.object({
  name: z.string().min(1)
});
