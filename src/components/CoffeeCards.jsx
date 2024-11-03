import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card";

const CoffeeCards = () => {

    const navigate = useNavigate()

  const { category } = useParams();
  //   console.log(category);


  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...coffeesData].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredByCategory);
    } else (
        setCoffees(coffeesData.slice(0,6))
    )
  }, [coffeesData, category]);


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn text-lg  btn-warning" onClick={()=>navigate('/coffees')}>View All</button>
      </div>
      
    </>
  );
};

export default CoffeeCards;
