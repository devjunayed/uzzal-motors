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
    <div className="card lg:card-side shadow-xl">
      <figure>
        <img
          src={img}
          alt={title + " image"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OurEquipmentCard;
