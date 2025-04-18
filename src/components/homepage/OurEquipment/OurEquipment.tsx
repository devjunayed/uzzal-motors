import OurEquipmentCard from "./OurEquipmentCard";

const OurEquipment = () => {
  const EquipmentDeatil = [
    {
      img: "../../../../images/excavator.jpg",
      title: "Excavator",
      description: "Excavators: Various sizes and models",
    },
    {
      img: "../../../../images/excavator.jpg",
      title: "Lobets",
      description:
        "Lobets: Heavy-duty trailers for transporting large equipment",
    },
    {
      img: "../../../../images/excavator.jpg",
      title: "Bulldozer",
      description: "Bulldozer: Powerful bulldozers for earthmoving and grading",
    },
    {
      img: "../../../../images/excavator.jpg",
      title: "Rollers",
      description:
        "Rollers: High-performance rollers for soil and asphalt compaction",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:gap-4 grow ">
      {EquipmentDeatil.map((equipment, index) => (
        <OurEquipmentCard key={index} {...equipment} />
      ))}
    </div>
  );
};

export default OurEquipment;
