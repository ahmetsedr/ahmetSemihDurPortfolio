import Aside from './(aboutComponents)/Aside';
import Section from './(aboutComponents)/Section';

function Page() {
  return (
    <div className="bg-gray-500 text-white font-mono min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto mt-8">
        <div className="flex flex-col md:flex-row">
          <Aside />
          <Section />
        </div>
      </main>
      
    </div>
  );
}

export default Page;
