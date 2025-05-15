import React, { ReactElement } from "react";

interface ContactInfoProps {
  icon: ReactElement;
  title: string;
  data: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, data }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-400">{data}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
