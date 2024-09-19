import HeroImage from "../../../assets/food/food4.wepb";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Treeats Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Order Online</h1>
      </div>
    </header>
  );
}
