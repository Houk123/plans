import SliderDailyTask from "@/components/Slider/DailyTask";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <SliderDailyTask />
    </div>
  );
}
