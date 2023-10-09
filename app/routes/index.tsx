import { json } from "@vercel/remix";
import { Form } from "@remix-run/react";
import { track } from "~/lib/analytics.server";

export const action = () => {
  track("Test", { this: "breaks" });
  return json;
};

export default function Home() {
  return (
    <main className="h-screen flex-col gap-6 flex items-center justify-center w-screen">
      <h1>Demo</h1>
      <Form method="POST" replace>
        <button type="submit">Submit action</button>
      </Form>
    </main>
  );
}
