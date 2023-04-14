import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Link href="/desk" className="text-purple-500 underline">
        Dashboard Temp
      </Link>
    </div>
  );
};

export default HomePage;
