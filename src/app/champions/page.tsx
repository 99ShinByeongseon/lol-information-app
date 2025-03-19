// src/app/champions/page.tsx
import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import type { ChampionsDetail } from "@/types/Champion";

// ISR: 하루(86400초)마다 페이지를 재검증합니다.
export const revalidate = 86400;

export default async function ChampionsPage() {
  const champions: ChampionsDetail[] = await fetchChampionList();

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">챔피언 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {champions.map((champion) => (
          <Link
            key={champion.id}
            href={`/champions/${champion.id}`}
            className="border p-4 hover:shadow-lg transition block"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`}
              alt={champion.name}
              width={120}
              height={120}
              className="mx-auto"
            />
            <h2 className="text-xl font-bold mt-4 text-center">
              {champion.name}
            </h2>
            <p className="text-gray-400 text-center">{champion.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
