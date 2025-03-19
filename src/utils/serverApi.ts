import { PATH } from "@/constants/path";
import { getRecentVersion } from "@/services/server/versionService";
import { ChampionsDetail } from "@/types/Champion";

export const fetchChampionList = async () => {
  const version = await getRecentVersion();
  const res = await fetch(
    `${PATH.DDRAGON_URL}/cdn/${version}/data/ko_KR/champion.json`,
    { next: { revalidate: 86400 } }
  );
  
  const { data }: { data: Record<string, ChampionsDetail> } = await res.json();
  return { data, version };
};
