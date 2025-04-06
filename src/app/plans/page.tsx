import { navLinks } from "@/lib/nav/NavLinks";
import NavPlans from "@/components/Nav/page/plans/default";

const Plans = () => {
  const libNavPlans = navLinks.find(link => link.name == "plans")?.submenu;
  
  if(!libNavPlans) return "Нет меню";

  return (
  <>
    <NavPlans links={libNavPlans}/>
  </>);
}

export default Plans;
