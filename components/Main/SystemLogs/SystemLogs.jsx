import React, { useEffect, useState } from "react";
import styles from "./SystemLogs.module.css";
import { RiTerminalBoxLine } from "react-icons/ri";

const logs = [
  "INITIALIZING_HANDSHAKE... DONE",
  "CONNECTING_TO_KAFKA_CLUSTER... CONNECTED",
  "FETCHING_REDIS_CACHE... CACHE_HIT",
  "BOOTSTRAPPING_MICROSERVICES... RUNNING",
  "MONITORING_THROUGHPUT... 1.2M REQ/SEC",
  "IDENTITY_VERIFICATION_MODULE... ACTIVE",
  "DOCUMENT_SERVICE_STORAGE... ENCRYPTED",
  "GLOBAL_PAYMENT_NODE_BENGALURU... ONLINE",
  "LATENCY_CHECK... 12ms",
  "REDUNDANCY_TEST... PASSED",
  "READY_FOR_DEPLOYMENT."
];

const SystemLogs = () => {
  const [visibleLogs, setVisibleLogs] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < logs.length) {
        setVisibleLogs((prev) => [...prev, logs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <div className={styles.dots}>
              <span></span><span></span><span></span>
            </div>
            <div className={styles.terminalTitle}>
              <RiTerminalBoxLine /> SYSTEM_RUNTIME_LOGS
            </div>
          </div>
          <div className={styles.terminalBody}>
            {visibleLogs.map((log, index) => (
              <div key={index} className={styles.logLine}>
                <span className={styles.prompt}>$</span> {log}
              </div>
            ))}
            <div className={styles.cursor}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemLogs;
