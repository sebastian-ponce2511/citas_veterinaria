const Error = ({ children }) => {
  return (
    <div className="bg-red-700 p-3 mb-3 text-white text-center uppercase font-bold rounded-lg">
      {children}
    </div>
  );
};

export default Error;
