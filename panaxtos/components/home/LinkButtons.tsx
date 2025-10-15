import Link from "next/link";

export default function LinkButtons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        className="flex flex-col items-start gap-4 p-12 border border-[#ddd] rounded-lg bg-[#FEBD0C]
        transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg"
      >
        <h2>파낙토스란?</h2>
        <p className="">
          파낙토스는 두뇌 건강과 활성화를 위해<br />
          뉴로피드백 시스템을 활용한 기기와 프로그램을 개발하고 있습니다
        </p>
        <div>
          <Link
            className="block w-[240px] text-center border-1 py-3 px-4 rounded-sm hover:bg-[#F2B50D] transition"
            href="https://www.panaxtos.com/m_inc.php?mk=corp_info"
            target="_blank"
            rel="noopener noreferrer">자세히보기</Link>
        </div>
      </div>

      <div
        className="flex flex-col items-start gap-4 p-12 border border-[#ddd] rounded-lg 
        transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg"
      >
        <h2 className="text-xl font-semibold">프로그램 설치</h2>
        <p className="text-[#333] leading-relaxed">
          파낙토스 뉴로피드백 훈련을 위해 필요한
          <br />
          설치 프로그램 및 자료를 다운받을 수 있습니다.
        </p>
        <div>
          <Link
            className="block w-[240px] text-center border-1 py-3 px-4 rounded-sm hover:bg-[#f8f8f8] transition"
            href="https://www.panaxtos.com/m_board.php?mk=cust_download&ps_db=&"
            target="_blank"
            rel="noopener noreferrer">
            필수 프로그램 다운로드
          </Link>
        </div>
      </div>
    </div>
  );
}
