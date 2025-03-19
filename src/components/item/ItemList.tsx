import { fetchItemList } from "@/utils/serverApi";
import ItemCard from "./ItemCard";

const ItemList = async () => {
  const { data: itemList, version } = await fetchItemList();
  const itemListArr = Object.entries(itemList);
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
      {itemListArr.map(([key, detail]) => (
        <ItemCard key={key} detail={detail} version={version} />
      ))}
    </div>
  );
};

export default ItemList;
