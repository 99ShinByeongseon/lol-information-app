import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6 text-red-400">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="text-gray-500 mb-8">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>

      <ul className="list-inside mb-8 flex flex-col items-center space-y-4">
        <li className="text-orange-400">
          <Link href="/champions">
            <div className="flex flex-col items-center">
              <Image
                src="/asset/pvp.jpg"
                alt="챔피언 이미지"
                width={700}
                height={400}
                className="mb-4"
              />
              <span>챔피언 목록 보기</span>
            </div>
          </Link>
        </li>

        <li className="text-orange-400">
          <Link href="/rotation">
            <div className="flex flex-col items-center">
              <Image
                src="/asset/echo.jpg"
                alt="로테이션 이미지"
                width={700}
                height={400}
                className="mb-4"
              />
              <span>금주 로테이션 확인</span>
            </div>
          </Link>
        </li>

        <li className="text-orange-400">
          <Link href="/items">
            <div className="flex flex-col items-center">
              <Image
                src="/asset/bard.jpg"
                alt="아이템 이미지"
                width={700}
                height={400}
                className="mb-4"
              />
              <span>아이템 목록 보기</span>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
