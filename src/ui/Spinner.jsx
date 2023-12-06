const Spinner = () => {
  return (
    <div className="w-screen h-screen  flex items-center justify-center ">
      <div className="animate-spin h-40 w-40 text-blue-500">
        {/* Using a circular div with a border for the spinner */}
        <div className="h-40 w-40 rounded-full border-t-8 border-blue-500 border-solid"></div>
      </div>
    </div>
  );
};

export default Spinner;
