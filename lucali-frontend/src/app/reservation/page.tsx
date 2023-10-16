"use client";
import React, { useEffect, useState } from "react";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import LoadingPage from "../loading";

const ReservationPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const userLoggedIn = isLoggedIn();

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, userLoggedIn]);

  if (!isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div>
      <h1>This is reservation page</h1>
    </div>
  );
};

export default ReservationPage;
