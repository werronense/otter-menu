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
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(OrderSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Success:", data);
  };

  const isCombo = watch("paleContents") === "combo";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <FormField
        type="text"
        placeholder="Enter name for order"
        name="name"
        register={register}
        error={errors.name}
      />
      <fieldset>
        <legend>Select the seafood for your meal pale:</legend>
        <div>
          <input
            id="clams"
            type="radio"
            value="clams"
            {...register("paleContents")}
            className="mr-2"
          />
          <label htmlFor="clams">Clams Only Pale</label>
        </div>
        <div>
          <input
            id="combo"
            type="radio"
            value="combo"
            {...register("paleContents")}
            className="mr-2"
          />
          <label htmlFor="combo">Clam + Squid Combo Pale</label>
        </div>
        {errors.paleContents && (
          <span className="text-red-600 text-sm">
            {errors.paleContents.message}
          </span>
        )}
      </fieldset>
      {isCombo && (
        <FormField
          type="number"
          placeholder="Enter a number between 1 and 100"
          name="squidPercent"
          register={register}
          error={errors.squidPercent}
        />
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
