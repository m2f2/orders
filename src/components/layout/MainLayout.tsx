import { MainLayoutProps } from "@/types/MainLayout";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex max-h-screen bg-gray-100 overflow-hidden ">
      {/* Sidebar */}
      <aside className="w-40 bg-white  p-4  flex-col flex border-l">
        <div className="text-lg font-semibold mb-6">الطلبات</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-h-screen ">
        {/* Topbar */}
        <header className="h-16 bg-white  flex items-center px-6 justify-between">
          <div className="text-xl font-bold">الطلبات</div>
        </header>

        {/* Main  Section */}
        <section
          className="flex-1 bg-white  min-w-full overflow-hidden"
          dir="rtl"
        >
          {children}
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
