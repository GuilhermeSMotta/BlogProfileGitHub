// import { dateFormatter } from "../../../../utils/formatter";
import { IssuesContainer, StyledNavLink } from "./styles";

export function Issues({ title, body, created_at, number, html_url }: Issue) {
  return (
    <IssuesContainer>
      <StyledNavLink to={html_url}>
        <div>
          <h2>{title}</h2>
          <span>Data de criação: {created_at}</span>
          <span>Identificador: {number}</span>
        </div>
        <p>{body}</p>
      </StyledNavLink>
    </IssuesContainer>
  );
}
