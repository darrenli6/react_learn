import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const categories = [
  { id: 1, name: "推荐" },
  { id: 2, name: "西餐" },
  { id: 3, name: "中餐" },
  { id: 4, name: "海鲜" },
];

root.render(
  <div>
    <ur>
      {categories.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ur>
  </div>
);
