export interface userCardsProps {
  title: string;
  value: number;
  icon: string;
}

const UserCards = ({ title, value, icon }: userCardsProps) => {
  return (
    <div className="flex items-end justify-between rounded-2xl bg-lightGrey px-4 py-6">
      <div className="flex flex-col items-start justify-start gap-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-4xl font-extrabold">{value}</p>
      </div>
      <div className="h-6 w-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="view all" width={24} height={24} />
      </div>
    </div>
  );
};

export default UserCards;
