const ContactItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <li>
      <div className="flex items-center justify-start space-x-3 mt-2">
        <div>{icon}</div>
        <div className="leading-5 lg:leading-6 text-lg">{text}</div>
      </div>
    </li>
  );
};

export default ContactItem;
