"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormData, OrderSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

export function OrderForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      name: "",
      paleContents: "clams",
      squidPercent: 50,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Success:", data);
  };

  const isCombo = form.watch("paleContents") === "combo";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="min-h-28">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter name for order" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paleContents"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel>Select seafood for your lunch pale:</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormItem>
                    <FormControl>
                      <RadioGroupItem value="clams" />
                    </FormControl>
                    <FormLabel className="ml-2">Clams Only</FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioGroupItem value="combo" />
                    </FormControl>
                    <FormLabel className="ml-2">Clam + Squid Combo</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        {isCombo && (
          <FormField
            control={form.control}
            name="squidPercent"
            render={({ field }) => (
              <FormItem className="min-h-28">
                <FormLabel>Percent (%) Squid</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a number between 1 and 100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
