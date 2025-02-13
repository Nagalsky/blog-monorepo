"use server";

import { fetchGraphQL } from "@/lib/fetch-graphql";
import { CREATE_USER_MUTATION, SIGN_IN_MUTATION } from "@/lib/gql-queries";
import { createSession } from "@/lib/session";
import { SignInFormState, SignUpFormState } from "@/types/form-state.type";
import { LogInFormSchema } from "@/zod-schemas/login-form-schema";
import { SignUpFormSchema } from "@/zod-schemas/signup-form-schema";
import { print } from "graphql";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signUp(
  state: SignUpFormState,
  formData: FormData,
): Promise<SignUpFormState> {
  const validatedFields = SignUpFormSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await fetchGraphQL(print(CREATE_USER_MUTATION), {
    input: {
      ...validatedFields.data,
    },
  });

  if (data.errors) {
    return {
      data: Object.fromEntries(formData.entries()),
      errors: {},
      message: "Something went wrong!",
    };
  }

  redirect("/signin");
}

export async function signIn(
  state: SignInFormState,
  formData: FormData,
): Promise<SignInFormState> {
  const validatedFields = LogInFormSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await fetchGraphQL(print(SIGN_IN_MUTATION), {
    input: {
      ...validatedFields.data,
    },
  });

  if (data.errors) {
    return {
      data: Object.fromEntries(formData.entries()),
      errors: {},
      message: "Invalid Credentials",
    };
  }

  await createSession({
    user: {
      id: data.signIn.id,
      name: data.signIn.name,
      avatar: data.signIn.avatar,
      email: data.signIn.email,
    },
    accessToken: data.signIn.accessToken,
  });

  revalidatePath("/");
  redirect("/");
}
