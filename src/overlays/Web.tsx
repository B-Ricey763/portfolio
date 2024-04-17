import ItemOverlay from "../ItemOverlay";
import { ContentCard } from "./ImageCard";
import { GithubButton } from "../ButtonTemplates";
import { Grid, Group } from "@mantine/core";

export default function Web() {
  return (
    <ItemOverlay title="Web Dev">
      <Group>
        <ContentCard
          title="Bespoked Bikes"
          description="Created in 48 hours, Bespoked Bikes is a complete CRUD app simulating a fictional bike company where 'company admins' can manage products and view customers. The backend is written in Python using Flask, the database is sqlite accessed throught SQLAlchemy, and HTML is served through jinja templating"
        >
          {{
            visualSection: <div />,
            button: (
              <GithubButton link="https://github.com/B-Ricey763/BeSpoked-Bikes-Sales" />
            ),
          }}
        </ContentCard>
      </Group>
    </ItemOverlay>
  );
}
