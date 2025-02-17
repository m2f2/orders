import "./App.css";
import ChatTabs from "./components/common/ChatContainer/chat/ChatHeader";
import MainLayout from "./components/layout/MainLayout";
import Orders from "./pages/Orders";

function App() {
  return (
    <>
      <MainLayout>
        <ChatTabs />
        <Orders />
      </MainLayout>
    </>
  );
}

export default App;
