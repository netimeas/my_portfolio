import React from 'react';
import './App.css';

// 프로젝트 정보를 담을 인터페이스를 정의합니다.
interface Project {
  id: number;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
}

const App: React.FC = () => {
  // 현재까지의 프로젝트 목록을 정의합니다.
  // 앞으로 프로젝트를 추가할 때 이 배열에 새로운 객체를 추가하면 됩니다.
  const projects: Project[] = [
    {
      id: 1,
      title: '동아리방 예약',
      description: `동아리방을 편리하게 예약할 수 있는 웹 애플리케이션입니다.`, // 템플릿 리터럴로 변경
      liveUrl: 'bit.ly/동아리방예약',
      githubUrl: 'https://github.com/netimeas/clubroom1.git',
    },
    {
      id: 2,
      title: '주제별 성경 암송',
      description: `주제별로 성경 구절을 암송하고 학습할 수 있도록 돕는 웹사이트입니다.`, // 템플릿 리터럴로 변경
      liveUrl: 'bit.ly/주제별성경암송',
      githubUrl: 'https://github.com/netimeas/memowords.git',
    },
    {
      id: 3,
      title: '포트폴리오 웹사이트',
      description: `개발한 프로젝트들을 소개하기 위해 직접 제작한 개인 포트폴리오 웹사이트입니다.`, // 템플릿 리터럴로 변경
      liveUrl: 'bit.ly/재순포트폴리오',
      githubUrl: 'https://github.com/netimeas/my_portfolio.git',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>나의 포트폴리오</h1>
        <p>제가 개발한 프로젝트들을 소개합니다.</p>
      </header>
      <main className="App-main">
        <section className="projects-section">
          <h2>프로젝트</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {/* 라이브 웹사이트 링크 (주소 표시 및 클릭 시 이동) */}
                  <a
                    href={`https://${project.liveUrl}`} // bit.ly 주소는 https://를 붙여야 링크로 작동합니다.
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                  >
                    {project.liveUrl}
                  </a>
                  {/* 깃허브 링크 (버튼 클릭 시 이동) */}
                  <button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="github-button"
                  >
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 새로운 연락처 섹션 추가 */}
        <section className="contact-section">
          {/* <h2>연락처</h2> */} {/* '연락처' 제목이 삭제되었습니다. */}
          {/* <p>더 자세한 정보나 협업 문의는 아래를 통해 연락 주세요!</p> */}
          <div className="contact-links">
            <a
              href="https://www.instagram.com/quova._/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              {/* 인스타그램 아이콘 SVG 추가 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              quova._ {/* 인스타그램 아이디 텍스트 유지 */}
            </a>
            {/* 다른 연락처 정보 (이메일, 링크드인 등)를 여기에 추가할 수 있습니다. */}
            {/* <a href="mailto:your.email@example.com" className="email-link">이메일: your.email@example.com</a> */}
          </div>
        </section>
      </main>
      {/* 푸터 영역이 삭제되었습니다. */}
    </div>
  );
};

export default App;
