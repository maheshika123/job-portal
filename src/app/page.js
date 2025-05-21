import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import ViewAllJobsButton from "@/components/ViewAllJobsButton";
import How from "@/components/How";
import Footer from "@/components/Footer";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero/>
      <Featured/>
      <ViewAllJobsButton/>
      <How/>
      <Footer/>
    </>
  );
};