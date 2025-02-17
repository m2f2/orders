const InfoSection = ({ icon, label, value, link }: any) => (
  <div className="bg-gray-100 p-3 rounded-lg border mb-4 flex flex-col text-gray-700">
    <div className="min-w-16 flex items-center gap-2 text-[#98a2b2] text-[8px] font-normal">
      {icon}
      <span>{label}</span>
    </div>
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[9px] font-medium text-[#181C34]  transition-colors duration-300"
      >
        {value}
      </a>
    ) : (
      <span className="text-[9px] my-1 text-[#181C34] font-medium  transition-colors duration-300">
        {value}
      </span>
    )}
  </div>
);
export default InfoSection;
