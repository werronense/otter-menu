import { FormFieldProps } from "@/types";

export const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        id={name}
        aria-invalid={error ? true : false}
      />
      {error && (
        <span className="text-red-600 text-sm" role="alert">
          {error.message}
        </span>
      )}
    </>
  );
};
