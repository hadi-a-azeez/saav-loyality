const ImageReview = () => {
  return (
    <div className="rounded-2xl bg-gold p-3">
      <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/icons/adidasLogo.png" alt="logo" width={40} />
        <div className="flex flex-col">
          <p>ADIDAS</p>
          <p>23/03/2023</p>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://www.retail4growth.com/public/uploads/editor/2021-09-15/1631679434.jpg"
        alt="review image"
        className="mt-4 w-full rounded-lg object-cover"
      />
    </div>
  );
};

export default ImageReview;
