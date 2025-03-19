import { fetchChampionList } from "@/utils/serverApi";
import ChampionCard from "@/components/champion/ChampionCard";

export const revalidate = 86400;

export default async function ChampionsPage() {
  const { data: championList, version } = await fetchChampionList();
  const championEntries = Object.entries(championList);

  return (
    <main className="pt-16">
      <h1 className="text-4xl font-bold text-red-700 mb-4">챔피언 목록</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
        {championEntries.map(([key, detail]) => (
          <ChampionCard key={key} detail={{ ...detail, version }} />
        ))}
      </div>
    </main>
  );
}
