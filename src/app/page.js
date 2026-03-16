import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import PostList from "./components/PostList";

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
      <section>
        <PostList/>
        </section>
    </main>
  );
}
