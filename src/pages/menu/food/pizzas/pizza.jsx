import Card from "../../../../component/card/card";
import { pizzas } from "../../../../const/const";

function Pizza() {
  return (
    <>
      <div className="pizzas__body">
        <Card image={pizzas[0].especial} text="Especial" pagesMenu="true" />
        <Card image={pizzas[0].napolitana} text="Napolitana" pagesMenu="true" />
        <Card image={pizzas[0].fugazzeta} text="Fugazzeta" pagesMenu="true" />
        <Card image={pizzas[0].verdura} text="Verdura" pagesMenu="true" />
      </div>
    </>
  );
}

export default Pizza;
