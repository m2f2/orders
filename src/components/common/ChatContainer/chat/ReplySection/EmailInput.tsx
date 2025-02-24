import { X } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React, { useCallback } from "react"; 
import { EmailInputProps } from "@/types/EmailInput";

const emailSchema = z.object({
  email: z.string().email("Invalid email format").trim(), 
});



const EmailInput: React.FC<EmailInputProps> = ({
  label,
  placeholder,
  onAddRecipient,
  recipients,
  onRemoveRecipient,
  isCcField = false,
  className,
  inputClassName,
  errorClassName,
  showLabel = true,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    resetField,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = useCallback(
    ({ email }: { email: string }) => {
      if (recipients.includes(email)) {
        return;
      }
      onAddRecipient(email);
      resetField("email");
    },
    [onAddRecipient, recipients, resetField]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();
        handleSubmit(onSubmit)();
        event.currentTarget.blur();
      }
    },
    [handleSubmit, onSubmit]
  );

  return (
    <div
      className={`flex items-center gap-1 w-full text-[#7A8699] ${className}`}
    >
      {showLabel && <label className="w-16 text-right text-sm">{label}:</label>}

      <div className="">
        <div className="flex items-center gap-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-wrap"
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder={placeholder}
                  onKeyDown={handleKeyDown}
                  className={`py-1 px-4 text-[9px] border rounded-full ${
                    isCcField ? "bg-[#e2e8f0] rounded-md min-w-[200px]" : "bg-white"
                  } border-gray-300 outline-none  ${inputClassName}`}
                />
              )}
            />
            <div className="flex flex-wrap gap-2  rounded-lg px-2">
              {recipients.map((email) => (
                <span
                  key={email}
                  className="border px-3 py-1 rounded-full flex items-center gap-2 text-[9px]"
                >
                  {email}
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => onRemoveRecipient(email)}
                  >
                    <X className="h-2 w-2" />
                  </button>
                </span>
              ))}
            </div>
          </form>
        </div>
        {errors.email && (
          <span className={`text-red-500 text-xs mt-1 ${errorClassName}`}>
            {errors.email.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default EmailInput;
