import { COMPANY } from "@/config/company";
import { PhoneIcon, MailIcon } from "@/components/ui/Icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap in">
        <span lang="ar" dir="rtl">
          {COMPANY.nameArabic}
        </span>
        <span className="tb-right">
          <a href={`tel:+${COMPANY.phone1WA}`}>
            <PhoneIcon />
            {COMPANY.phone1Display}
          </a>
          <a href={`mailto:${COMPANY.email}`}>
            <MailIcon />
            {COMPANY.email}
          </a>
        </span>
      </div>
    </div>
  );
}
