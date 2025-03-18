// src/app/page.tsx
export default function HomePage() {
    return (
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-4">리그 오브 레전드 정보 앱</h1>
        <p className="text-gray-300 mb-6">
          Riot API를 활용해 챔피언, 아이템, 로테이션 정보를 제공합니다.
        </p>
  
        <p className="mb-2">
          이 웹 애플리케이션에서는 다음과 같은 정보를 확인할 수 있습니다:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>챔피언 목록</li>
          <li>아이템 목록</li>
          <li>주간 무료 로테이션</li>
        </ul>
  
        <p className="text-sm text-gray-500">
          본 앱은 Riot Games의 공식 후원을 받지 않으며, Riot Games 또는 관련
          계열사의 견해나 의견을 대변하지 않습니다.
        </p>
      </section>
    );
  }
  