import { Card, CardContent } from "@/components/ui/card";

const tickets = [
  {
    id: 1,
    status: "قيد التنفيذ",
    color: "text-blue-500 border-blue-500 bg-blue-500",
  },
  {
    id: 2,
    status: "منجز",
    color: "text-green-500 border-green-500 bg-green-500",
  },
  { id: 3, status: "ملغي", color: "text-red-500 border-red-500 bg-red-500" },
  {
    id: 4,
    status: "معلق",
    color: "text-yellow-500 border-yellow-500 bg-yellow-500",
  },
  {
    id: 5,
    status: "لم تبدأ",
    color: "text-gray-500 border-gray-500 bg-gray-500",
  },
];

const TicketsTab = () => {
  const address = "نواجه مشكلة في عدم عمل واجهة المستخدم";
  const truncatedAddress =
    address.length > 25 ? address.slice(0, 25) + "..." : address;
  return (
    <div className="h-full min-w-52">
      <div className="flex items-center mb-4">
        <h2 className="text-base font-medium px-4 py-1">تذاكر مرتبطة</h2>
        <span className="px-3 border py-1 rounded-xl text-sm font-medium text-gray-700">
          {tickets.length}
        </span>
      </div>

      <Card className="border-0 shadow-none bg-white rounded-lg min-w-52">
        <CardContent className="p-4">
          <div className="space-y-3">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex flex-col  border rounded-lg p-2 shadow-sm bg-gray-50 "
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-[9px] font-semibold text-gray-800">
                    {truncatedAddress}
                  </h3>
                  <span className="text-[#7a8699] text-[7px] font-light">
                    #4545
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <img
                      src="/company-logo.png"
                      alt="Logo"
                      className="w-5 h-5 rounded-full border"
                    />
                    <p className="text-[8px] text-gray-500">
                      اسم الشركة او الشخص
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-[10px] font-medium border-[0.75px] rounded-lg bg-opacity-10 ${ticket.color}`}
                  >
                    {ticket.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TicketsTab;
