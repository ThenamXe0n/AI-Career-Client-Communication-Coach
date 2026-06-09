"use client";

import { authStorage }
from "../lib/auth";

export const useAuth = () => {

  const token =
    authStorage.getToken();

  return {
    isAuthenticated:
      !!token,
  };

};