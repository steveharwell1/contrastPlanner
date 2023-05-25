import Counter from "~/components/Counter";
export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Choose colors
      </h1>
      <input type="color" style="appearance:none;"/>
      <input type="color" style="appearance:none;"/>
    </main>
  );
}
