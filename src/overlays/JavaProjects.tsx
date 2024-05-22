import { Group } from "@mantine/core";
import { GithubButton } from "../ButtonTemplates";
import ItemOverlay from "../ItemOverlay";
import { ContentCard, ImageSection } from "./ContentCard";

export default function JavaProjects() {
  return (
    <ItemOverlay title="Java Projects" size="xl">
      <Group align="stretch" wrap="wrap" justify="center">
        <ContentCard
          title="Library Management System"
          description="Create, Borrow, and Return book in this library system with a customer facing GUI made with JavaFX and a admin facing CLI, all saved persistently with json serialization."
          width={350}
        >
          {{
            visualSection: (
              <ImageSection link="JavaProjects/LibraryManagementSystemGUI.png" />
            ),
            button: (
              <GithubButton link="https://github.com/B-Ricey763/library-management-system" />
            ),
          }}
        </ContentCard>
        <ContentCard
          title="Minesweeper Clone"
          description="A clone of the classic game Minesweeper created with Java Swing through Replit, including bombs, flags, and game state"
          width={350}
        >
          {{
            visualSection: (
              <ImageSection link="JavaProjects/MinesweeperJavaSwing.png" />
            ),
            button: (
              <GithubButton link="https://github.com/B-Ricey763/minesweeper-java-swing" />
            ),
          }}
        </ContentCard>
        <ContentCard
          title="Tic Tac Toe"
          description="The classic Tic Tac Toe game reimagined in Java using Java Swing for GUI."
          width={350}
        >
          {{
            visualSection: (
              <ImageSection link="JavaProjects/TicTacToeJava.png" />
            ),
            button: (
              <GithubButton link="https://github.com/B-Ricey763/Tic-Tac-Toe-Java" />
            ),
          }}
        </ContentCard>
      </Group>
    </ItemOverlay>
  );
}
