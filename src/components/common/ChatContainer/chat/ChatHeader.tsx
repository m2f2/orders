import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

const ChatTabs = () => {
  const [activeOrders, setActiveOrders] = useState([
    { id: Date.now(), title: "نواجه مشكلة في عدم عمل واجهة المستخدم" },
  ]);
  const [selectedOrder, setSelectedOrder] = useState<number | null>(activeOrders[0]?.id || null);

  const handleRemoveOrder = (orderId: number) => {
    setActiveOrders((prevOrders) => {
      const filteredOrders = prevOrders.filter((o) => o.id !== orderId);
      if (selectedOrder === orderId) setSelectedOrder(filteredOrders[0]?.id || null);
      return filteredOrders;
    });
  };

  const handleAddOrder = () => {
    const newOrder = {
      id: Date.now(),
      title: "نواجه مشكلة في عدم عمل واجهة المستخدم",
    };

    setActiveOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, newOrder];
      setSelectedOrder(newOrder.id);
      return updatedOrders;
    });
  };

  return (
    <header className="flex items-center justify-between  border-y ">
      <div className="flex items-center gap-2 flex-1 overflow-x-hidden">
        <div className="flex flex-nowrap ">
          {activeOrders.map((order) => (
            
            <div
              key={order.id}
              onClick={() => setSelectedOrder(order.id)}
              className={`
                flex items-center justify-center gap-2 px-4 py-1 transition-all duration-200 cursor-pointer min-w-[140px] bg-white  border-l
                ${selectedOrder === order.id ? "text-[#7A8699] " : "text-[#C7CED9]"}
              `}
            >
              <div className="flex flex-col ">
                <span className="text-[11px] text-center truncate max-w-[135px] ">
                  {order.title}
                </span>
                <span className="text-[7px] text-[#C7CED9]">رقم الطلب: {order.id}</span>
              </div>
              <X
                className="h-4 w-4 cursor-pointer hover:text-red-600 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveOrder(order.id);
                }}
              />
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleAddOrder}
          className="rounded-xl text-[#373e5d] hover:bg-gray-200 border transition-all"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
    </header>
  );
};

export default ChatTabs;