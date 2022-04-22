import Appbar from "../components/Appbar";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <Appbar />
        {children}
      </main>
    </>
  );
}
