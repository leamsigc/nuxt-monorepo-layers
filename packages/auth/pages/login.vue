<script lang="ts" setup>
/**
 *
 * Login
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

const validationSchema = toTypedSchema(
  zod.object({
    email: zod
      .string()
      .min(1, { message: "This is required" })
      .email({ message: "Must be a valid email" }),
    password: zod
      .string()
      .min(1, { message: "This is required" })
      .min(8, { message: "Too short" }),
  })
);

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema,
});

useSeoMeta({
  title: "Log in",
  description:
    "Enter your email & password to log in or continue with Google or Facebook.",
});
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div class="w-full max-w-[330px] px-5">
      <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Log in</h1>
      <p class="mt-1 text-muted-foreground">Enter your email & password to log in.</p>

      <form class="mt-10" :on-submit="handleSubmit">
        <UiVeeInput label="Email" name="email" required type="email" />
      </form>
      <p class="mt-8 text-sm">
        <NuxtLink
          class="font-semibold text-primary underline-offset-2 hover:underline"
          to="#"
        >
          Forgot password?
        </NuxtLink>
      </p>
      <p class="mt-4 text-sm text-muted-foreground">
        Don't have an account?
        <NuxtLink
          class="font-semibold text-primary underline-offset-2 hover:underline"
          to="#"
        >
          Create account
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
