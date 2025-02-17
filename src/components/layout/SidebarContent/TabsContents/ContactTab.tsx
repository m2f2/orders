import InfoSection from "@/components/common/InfoSection";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Globe, Trash2, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    icon: <MessageCircle className="w-3 h-3" />,
    href: "https://wa.me/0123456789",
    label: "WhatsApp",
  },
  {
    icon: <Phone className="w-3 h-3" />,
    href: "tel:0123456789",
    label: "Phone",
  },
  {
    icon: <Mail className="w-3 h-3" />,
    href: "mailto:ahmed@example.com",
    label: "Email",
  },
  {
    icon: <Globe className="w-3 h-3" />,
    href: "https://www.google.com",
    label: "Website",
  },
];

export default function ContactTab() {
  return (
    <div className="h-full min-w-52">
      <h2 className="text-base font-medium px-4 py-1">بيانات الاتصال</h2>

      <Card className="border-0 shadow-none bg-white rounded-lg">
        <CardContent className="p-4">
          {/* Contact Info Section */}
          <div className="bg-gray-100 p-3 rounded-lg border mb-4">
            <div className="flex gap-2 items-center">
              <img
                src="/company-logo.png"
                alt="Company Logo"
                className="w-9 h-9 rounded-full border"
              />
              <div>
                <h3 className="text-[11px] font-semibold text-[#181C34]">
                  اسم الشركة أو الشخص
                </h3>
                <p className="text-[10px] text-gray-500">السعودية</p>
              </div>
            </div>

            <div className="flex justify-center gap-2 text-[#98A2B2] text-xl mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="bg-gray-200 p-1 rounded-full flex items-center justify-center"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sections for Contact Info */}
          <InfoSection
            icon={<Phone className="w-3 h-3" />}
            label="رقم التواصل"
            value="0123456789"
          />
          <InfoSection
            icon={<Mail className="w-3 h-3" />}
            label="البريد الإلكتروني"
            value="ahmed@example.com"
            link="mailto:ahmed@example.com"
          />
          <InfoSection
            icon={<Trash2 className="w-3 h-3" />}
            label="البلد"
            value="السعودية"
          />
          <InfoSection
            icon={<Globe className="w-3 h-3" />}
            label="اللغة المفضلة"
            value="العربية"
          />
        </CardContent>
      </Card>
    </div>
  );
}
