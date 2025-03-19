// src/app/items/page.tsx
import { getItemList } from "../../services/server/itemService";
import ItemCard from "../../components/item/ItemCard";

export const revalidate = 86400;

export default async function ItemsPage() {
  const { data, version } = await getItemList();
  const itemListArr = Object.entries(data);

  return (
    <main className="pt-16">
      <h1 className="text-4xl font-bold text-red-700 mb-4">아이템 목록</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
        {itemListArr.map(([key, detail]) => (
          <ItemCard key={key} detail={detail} version={version} />
        ))}
      </div>
    </main>
  );
}
