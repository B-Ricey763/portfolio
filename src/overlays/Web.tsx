import ItemOverlay from "../ItemOverlay";
import { ContentCard, ImageSection } from "./ContentCard";
import { GithubButton } from "../ButtonTemplates";
import { Group } from "@mantine/core";

export default function Web() {
  return (
    <ItemOverlay title="Web Dev">
      <Group grow={true} align="stretch">
        <ContentCard
          title="Bespoked Bikes"
          description="Created in 48 hours, Bespoked Bikes is a complete CRUD app simulating a fictional bike company where 'company admins' can manage products and view customers. The backend is written in Python using Flask, the database is sqlite accessed throught SQLAlchemy, and HTML is served through jinja templating"
        >
          {{
            visualSection: <ImageSection link="bespoked_bikes.png" />,
            button: (
              <GithubButton link="https://github.com/B-Ricey763/BeSpoked-Bikes-Sales" />
            ),
          }}
        </ContentCard>
        <ContentCard
          title="Haha Heros"
          description="Created in 7 days, this was meant to simulate a volunteer management app. I used React for the frontend and Express for the backend, with Material UI as the component library. The app allows you to create, read, update, delete, sort, filter, and view notes of each volunteer."
        >
          {{
            visualSection: <ImageSection link="bog_app.png" />,
            button: (
              <GithubButton link="https://github.com/B-Ricey763/haha-heros-react-app" />
            ),
          }}
        </ContentCard>
      </Group>
    </ItemOverlay>
  );
}
