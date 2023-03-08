const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="my-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
            <p className="text-lg text-white">M</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium">Marques</p>
            <p className="text-sm text-gray-500">20 years old</p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          {/* add walkout */}
          <div className="items-center-justify-center flex cursor-pointer gap-2 rounded-lg border border-gray-200 py-3 px-4">
            <img
              src="/assets/icons/walkoutIcon.svg"
              alt="walkout"
              className="h-4 w-4"
            />
            <p className="text-xs">Add Walkout</p>
          </div>
          {/* add to order */}
          <div className="items-center-justify-center flex cursor-pointer gap-2 rounded-lg bg-black py-3 px-4 text-white">
            <img
              src="/assets/icons/orderIcon.svg"
              alt="walkout"
              className="h-4 w-4"
            />
            <p className="text-xs">Add Order</p>
          </div>
          {/* send message */}
          <div className="items-center-justify-center flex cursor-pointer gap-2 rounded-lg bg-whatsapp py-3 px-4 text-white">
            <img
              src="/assets/icons/whatsappIcon.svg"
              alt="walkout"
              className="h-4 w-4"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
