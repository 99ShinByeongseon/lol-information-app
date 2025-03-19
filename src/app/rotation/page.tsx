import { fetchChampionList } from "@/utils/serverApi";

export const revalidate = 86400;

export default async function ChampionsPage() {

  return (
    <main className="pt-16">
      <h1 className="text-4xl font-bold text-red-700 mb-4">이번 주 무료 챔피언</h1>
    </main>
  );
}
