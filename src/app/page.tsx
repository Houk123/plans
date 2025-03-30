import styles from "./page.module.css";
import { Button } from "@chakra-ui/react"

export default function Home() {
  return (
    <div className={styles.page}>
      <Button variant="solid" colorPalette={"gray"}>Solid</Button>
    </div>
  );
}
