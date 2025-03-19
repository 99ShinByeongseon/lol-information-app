"use server";

import type { ChampionsDetail } from "@/types/Champion";

export async function fetchChampionList(): Promise<ChampionsDetail[]> {
    
  const champions: ChampionsDetail[] = [
    {
      version: "13.4.1",
      id: "Aatrox",
      key: "266",
      name: "Aatrox",
      title: "the Darkin Blade",
      blurb: "Some description",
      image: { full: "Aatrox.png" },
    },
    // ... 추가 챔피언 데이터
  ];
  return champions;
}
