import Header from "../components/ui/Header";
import "../styles/globals.css";

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body>
        <Header title="Generic Movie" />

        <section className="bg-sa-black">
          <div className="max-w-3xl mx-auto">{children}</div>
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
