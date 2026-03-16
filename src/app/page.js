import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <main>
      <h1>My First Next.js Assignment</h1>
      <section>
      <Counter/>
      </section>
      <section>
      <LoginForm/>
      </section>
    </main>
  );
}
