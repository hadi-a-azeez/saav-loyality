const TextReview = () => {
  return (
    <div className="flex items-center justify-center gap-3 rounded-2xl bg-gold p-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/icons/adidasLogo.png"
        alt="logo"
        className="h-full w-12 pl-2"
      />
      <div className="rounded-lg bg-white p-3">
        <p className="text-sm font-bold">Great collection!</p>
        <p className="text-xs font-semibold text-gray-600">
          Great clothing store with a wide variety of styles to choose from.
        </p>
      </div>
    </div>
  );
};

export default TextReview;
