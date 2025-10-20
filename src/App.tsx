import React, { useState } from 'react';

// 프로젝트 정보를 담을 인터페이스를 정의합니다.
interface Project {
  id: number;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
}

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark'); // 기본 테마를 'dark'로 설정

  // 테마 전환 함수
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // CSS 스타일을 컴포넌트 내에 직접 정의합니다.
  const styles = `
    :root {
      --bg-color: #f4f7f6;
      --text-color: #333;
      --header-bg: #282c34;
      --header-text-color: white;
      --card-bg: white;
      --card-shadow: rgba(0, 0, 0, 0.05);
      --section-title-color: #282c34;
      --contact-bg: #e0e7eb;
      --accent-color: #61dafb;
      --button-bg: #282c34;
      --button-text-color: white;
      --live-link-color: #007bff;
      --live-link-border: #007bff;
    }

    .dark {
      --bg-color: #1a202c;
      --text-color: #e2e8f0;
      --header-bg: #111827;
      --header-text-color: #e2e8f0;
      --card-bg: #2d3748;
      --card-shadow: rgba(0, 0, 0, 0.2);
      --section-title-color: #e2e8f0;
      --contact-bg: #2d3748;
      --button-bg: #4a5568;
      --live-link-color: var(--accent-color);
      --live-link-border: var(--accent-color);
    }

    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .App {
      text-align: center;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .App-header {
      background-color: var(--header-bg);
      padding: 40px 20px;
      color: var(--header-text-color);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      position: relative;
    }
    
    .theme-toggle-button {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: 1px solid var(--accent-color);
      color: var(--accent-color);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease;
      font-size: 1.2rem;
    }
    
    .theme-toggle-button:hover {
        background-color: var(--accent-color);
        color: var(--header-bg);
    }

    .App-header h1 {
      font-size: 3em;
      margin-bottom: 10px;
      font-weight: 700;
    }

    .App-header p {
      font-size: 1.2em;
      opacity: 0.9;
    }

    .App-main {
      flex-grow: 1;
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    .projects-section h2 {
      font-size: 2.5em;
      color: var(--section-title-color);
      margin-bottom: 40px;
      position: relative;
      display: inline-block;
    }

    .projects-section h2::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -10px;
      width: 60px;
      height: 4px;
      background-color: var(--accent-color);
      border-radius: 2px;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      justify-content: center;
      align-items: stretch;
    }

    .project-card {
      background-color: var(--card-bg);
      border-radius: 15px;
      padding: 30px;
      box-shadow: 0 10px 20px var(--card-shadow);
      transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px var(--card-shadow);
    }

    .project-card h3 {
      font-size: 1.8em;
      color: var(--text-color);
      margin-top: 0;
      margin-bottom: 15px;
    }

    .project-card p {
      font-size: 1.1em;
      line-height: 1.6;
      color: var(--text-color);
      opacity: 0.8;
      margin-bottom: 25px;
      flex-grow: 1;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    .project-links {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: auto;
    }

    .live-link {
      color: var(--live-link-color);
      text-decoration: none;
      font-weight: 500;
      font-size: 1.1em;
      transition: color 0.3s ease, border-color 0.3s ease;
      padding: 10px 15px;
      border: 1px solid var(--live-link-border);
      border-radius: 8px;
      display: inline-block;
    }

    .live-link:hover {
      color: var(--accent-color);
      border-color: var(--accent-color);
      opacity: 0.8;
    }

    .github-button {
      background-color: var(--button-bg);
      color: var(--button-text-color);
      padding: 12px 25px;
      border: none;
      border-radius: 8px;
      font-size: 1.1em;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      font-weight: 600;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .github-button:hover {
      opacity: 0.8;
      transform: translateY(-2px);
    }

    .contact-section {
      margin-top: 60px;
      padding: 40px 20px;
      background-color: var(--contact-bg);
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
      transition: background-color 0.3s ease;
    }
    
    .instagram-link {
      background-color: #E1306C;
      color: white;
      padding: 12px 25px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 1.1em;
      font-weight: 600;
      transition: background-color 0.3s ease, transform 0.2s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .instagram-link:hover {
      background-color: #C13584;
      transform: translateY(-2px);
    }
  `;

  const projects: Project[] = [
    {
      id: 1,
      title: '동아리방 예약',
      description: `동아리방을 편리하게 예약할 수 있는 웹 애플리케이션입니다.`,
      liveUrl: 'bit.ly/동아리방예약',
      githubUrl: 'https://github.com/netimeas/clubroom1.git',
    },
    {
      id: 2,
      title: '주제별 성경 암송',
      description: `주제별로 성경 구절을 암송하고 학습할 수 있도록 돕는 웹사이트입니다.`,
      liveUrl: 'bit.ly/주제별성경암송',
      githubUrl: 'https://github.com/netimeas/memowords.git',
    },
    {
      id: 3,
      title: '포트폴리오 웹사이트',
      description: `개발한 프로젝트들을 소개하기 위해 직접 제작한 개인 포트폴리오 웹사이트입니다.`,
      liveUrl: 'bit.ly/재순포트폴리오',
      githubUrl: 'https://github.com/netimeas/my_portfolio.git',
    },
    {
      id: 4,
      title: '지름 찾기 (교육용)',
      description: `원의 지름을 직접 그어보면서 원의 성질을 파악하는 교육용 웹사이트입니다.`,
      liveUrl: '지름찾기1.uzu.kr',
      githubUrl: 'https://github.com/netimeas/diameter_offline',
    },
  ];

  const determineProtocol = (url: string) => {
    if (url.includes('bit.ly')) {
      return 'https://';
    }
    return 'http://';
  };

  return (
    <div className={`App ${theme}`}>
      <style>{styles}</style>
      <header className="App-header">
        <button onClick={toggleTheme} className="theme-toggle-button" aria-label="Toggle theme">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
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
                  <a
                    href={`${determineProtocol(project.liveUrl)}${project.liveUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                  >
                    {project.liveUrl}
                  </a>
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

        <section className="contact-section">
          <div className="contact-links">
            <a
              href="https://www.instagram.com/quova._/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
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
              quova._
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;

