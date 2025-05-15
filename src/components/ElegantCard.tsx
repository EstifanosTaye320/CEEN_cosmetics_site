const ElegantCard: React.FC<{
  title: string;
  content: string;
  position?: string;
}> = ({ title, content, position = "" }) => {
  return (
    <div
      className={`bg-white bg-opacity-50 backdrop-blur-sm p-4 rounded-lg shadow-lg w-[400px] ${position}`}
    >
      <div className="flex items-center">
        <div className="text-6xl font-bold mr-4">{title[0]}</div>
        <div className="text-lg font-bold uppercase tracking-wider">
          {title}
        </div>
      </div>
      <p className="mt-2 text-gray-400">{content}</p>
    </div>
  );
};

export default ElegantCard;
