import { Grid } from "@mantine/core";
import ItemOverlay from "../ItemOverlay";
import ImageCard from "./ImageCard";
import { GithubButton } from "../ButtonTemplates";

export default function JavaProjects() {
  return (
    <ItemOverlay title="Java Projects" size="xl">
      <Grid>
        <Grid.Col span={4}>
          <ImageCard
            imagePath="JavaProjects/LibraryManagementSystemGUI.png"
            title="Library Management System"
            description="Create, Borrow, and Return book in this library system with a customer facing GUI made with JavaFX and a admin facing CLI, all saved persistently with json serialization."
            button={
              <GithubButton link="https://github.com/B-Ricey763/library-management-system" />
            }
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ImageCard
            imagePath="JavaProjects/MinesweeperJavaSwing.png"
            title="Minesweeper Clone"
            description="A clone of the classic game Minesweeper created with Java Swing through Replit, including bombs, flags, and game state"
            button={
              <GithubButton link="https://github.com/B-Ricey763/minesweeper-java-swing" />
            }
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ImageCard
            imagePath="JavaProjects/TicTacToeJava.png"
            title="Tic Tac Toe"
            description="The classic Tic Tac Toe game reimagined in Java using Java Swing for GUI."
            button={
              <GithubButton link="https://github.com/B-Ricey763/Tic-Tac-Toe-Java" />
            }
          />
        </Grid.Col>
      </Grid>
    </ItemOverlay>
  );
}
