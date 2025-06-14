import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-800 min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
