"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useLogin } from "../hooks/use-login";

import { authStorage } from "@/shared/lib/auth";

export function LoginForm() {

    const router =
        useRouter();

    const loginMutation =
        useLogin();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleSubmit =
        async (
            e: React.FormEvent
        ) => {

            e.preventDefault();

            const response =
                await loginMutation.mutateAsync({
                    email,
                    password,
                });

            authStorage.setToken(
                response.data.token
            );

            router.push(
                "/dashboard"
            );

        };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <input
                value={email}
                onChange={(e) =>
                    setEmail(
                        e.target.value
                    )
                }
                placeholder="Email"
                className="border p-2 w-full"
            />

            <input
                type="password"
                value={password}
                onChange={(e) =>
                    setPassword(
                        e.target.value
                    )
                }
                placeholder="Password"
                className="border p-2 w-full"
            />

            <button
                type="submit"
                className="border px-4 py-2"
            >
                Login
            </button>
        </form>
    );
}