import Navbar from '@/app/components/Navbar/Navbar';
import Sidebar from '@/app/components/Sidebar/SideBar';
import Orders from '@/app/components/Orders/Orders';
import styles from "./Dashboard.module.css";
import Graph from '@/app/components/Graph/Graph';
import TrafficChart from '@/app/components/TrafficCard/TrafficCard';
import StatCardContainer from '@/app/components/Cards/StatCardContainer';
import RecentActivities from '@/app/components/RecentActivities/RecentActivities';
import { Spotlight } from '@/app/components/ui/SpotLight';
import { GlobeDemo } from '@/app/components/Animation/GlobeDemo';

const DashboardPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <Navbar className={styles.navbar}/>
        <div className={styles.content}>
          <div className={styles.topSection}>
            <div className={styles.graphAndCards}>
              <Graph />
              <TrafficChart />
            </div>
          </div>
          <div className={styles.middleSection}>
            <StatCardContainer />
          </div>
          <div className={styles.bottomSection}>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <RecentActivities />
            <Orders />
          </div>
        </div>
        <div className={styles.globeContainer}>
          <GlobeDemo />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
