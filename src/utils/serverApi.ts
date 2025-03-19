import { PATH } from "@/constants/path";
import { getRecentVersion } from "@/services/server/versionService";

export const fetchChampionList = async () => {
  const version = await getRecentVersion();
  const res = await fetch(
    `${PATH.DDRAGON_URL}/cdn/${version}/data/ko_KR/champion.json`,
    { next: { revalidate: 86400 } }
  );
  const { data } = await res.json();
  return data;
};
