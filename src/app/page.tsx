import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "home page of this blog",
};

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center font-bold">Home page</h1>
    </div>
  );
};

export default HomePage;
