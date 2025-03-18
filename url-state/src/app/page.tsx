import { Example } from "@/_components/example";

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-lg font-bold text-center">URL state Demo</h1>
      <div>
        <Example />
      </div>
      <div className="my-6">
        <p className="italic">* Remember to use zod to validate the URL*</p>
      </div>
    </div>
  );
}
