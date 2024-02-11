import FormWithRHF from "@/components/FormWithRHF";
import FormWithRHFAndZod from "@/components/FormWithRHFAndZod";
import FormWithRHFAndZodAndServer from "@/components/FormWithRHFAndZodAndServer";
import FormWithoutRHF from "@/components/FormWithoutRHF";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <FormWithoutRHF /> */}
      {/* <FormWithRHF /> */}
      {/* <FormWithRHFAndZod /> */}
      <FormWithRHFAndZodAndServer />
    </main>
  );
}
