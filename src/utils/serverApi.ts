// utils/serverApi.ts
"use server";

import { Champion } from "../types/Champion";

export async function fetchChampionList(): Promise<Champion[]> {
  // 실제 Data Dragon API 호출 예시:
  // const res = await fetch("https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json");
  // const data = await res.json();
  // const champions: Champion[] = Object.values(data.data);
  // return champions;

  // 예시로 더미 데이터를 반환
  const champions: Champion[] = [
    {
      id: "Aatrox",
      name: "Aatrox",
      title: "the Darkin Blade",
      image: {
        full: "Aatrox.png",
        sprite: "champion0.png",
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    {
      id: "Ahri",
      name: "Ahri",
      title: "the Nine-Tailed Fox",
      image: {
        full: "Ahri.png",
        sprite: "champion0.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    // 필요한 만큼 챔피언 데이터를 추가하세요.
  ];

  return champions;
}
