type TOurEquipmentCardProps = {
  img: string;
  title: string;
  description: string;
};

const OurEquipmentCard = ({
  img,
  title,
  description,
}: TOurEquipmentCardProps) => {
  return (
    <div className="card lg:card-side shadow-md ">
      <figure className="w-5/12">
        <img className="contain w-full h-full" src={img} alt={title + " image"} />
      </figure>
      <div className="card-body w-7/12">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OurEquipmentCard;
