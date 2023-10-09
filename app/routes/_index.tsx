import { json } from "@vercel/remix";
import { Form, useActionData } from "@remix-run/react";
import { track } from "~/lib/analytics.server";

export const action = () => {
  track("Test", { this: "breaks" });
  return json({ success: true });
};

export default function Home() {
  const data = useActionData<typeof action>();
  return (
    <main className="h-screen text-black flex-col gap-6 flex items-center justify-center w-screen">
      <h1>Demo</h1>
      {data?.success ? (
        <p>Success!</p>
      ) : (
        <Form method="POST" replace>
          <button type="submit">Submit action</button>
        </Form>
      )}
    </main>
  );
}
