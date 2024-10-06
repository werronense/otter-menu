"use client";

import { useForm } from "react-hook-form";
import { FormField } from "./FormField";
import { FormData, OrderSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(OrderSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Success:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <FormField
        type="text"
        placeholder="Enter name for order"
        name="name"
        register={register}
        error={errors.name}
      />
      <FormField
        type="number"
        placeholder="Enter a number between 1 and 100"
        name="squidPercent"
        register={register}
        error={errors.squidPercent}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
