import { useEffect, useState } from "react";
import { Issues } from "./components/Issues";
import { Summary } from "./components/Summary";
import { HomeContainer, IssuesAside } from "./styles";

interface Issue {
  number: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
}

export function Home() {
  const [IssuesData, setIssuesData] = useState<Issue | null>(null);
  async function fetchIssues() {
    const response = await fetch("https://api.github.com/repos/GuilhermeSMotta/BlogProfileGitHub/issues/1");
    const data = await response.json();
    setIssuesData(data);
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <HomeContainer>
      <Summary />
      <IssuesAside>
        <Issues
          title={IssuesData?.title}
          body={IssuesData?.body}
          created_at={IssuesData?.created_at}
          number={IssuesData?.number}
          html_url={IssuesData?.html_url}
        />
      </IssuesAside>
    </HomeContainer>
  );
}
