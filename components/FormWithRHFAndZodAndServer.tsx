"use client";

import { FormSchemaType, formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function FormWithRHFAndZodAndServer() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchemaType) => {
    const response = await fetch("/api/form-submit", {
      method: "POST",
      body: JSON.stringify({
        email: "youssef@gmail.com",
        password: 123456789,
        confirmPassword: "onwfouwefowfe",
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      alert("Something went wrong");
      return;
    }

    if (responseData.errors) {
      const [key, value] = Object.entries(responseData.errors)[0];
      setError(key, {
        type: "server",
        message: value,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 text-black"
    >
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded"
      />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}
      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm password"
        className="px-4 py-2 rounded"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
