import SliderDailyTask from "@/components/Slider/DailyTask";
import styles from "./page.module.css";
import ListTaskDefault from "@/components/List/Task/default";

export default function Home() {
  return (
    <div className={styles.page}>
      <SliderDailyTask />
      <ListTaskDefault />
    </div>
  );
}
