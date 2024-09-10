export const ProgressBar = ({ value }) => {
    return (
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          style={{ width: `${value}%` }}
          className="h-2 bg-blue-400 rounded-full"
        ></div>
      </div>
    );
  };