import React from "react";
import styles from "./Table.module.css";

const SortButton = () => (
  <button className={styles.sortButton} type="button">
    <div className={styles.iconWrapper}>
      <div className={styles.icon} />
    </div>
  </button>
);

export const Table = ({ columns, data, emptyState }) => {
  const isEmpty = !data || data.length === 0;

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={col.key || index} className={styles.th}>
                <div 
                  className={`${styles.headerContent} ${col.align === "right" ? styles.contentRight : ""}`}
                >
                  <span>{col.label}</span>
                  {col.sortable && <SortButton />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {isEmpty ? (
            <tr>
              <td 
                colSpan={columns.length} 
                className={styles.td} 
                style={{ borderBottom: "none" }}
              >
                <div className={styles.emptyStateContainer}>
                  <p className={styles.emptyStateTitle}>{emptyState?.title}</p>
                  <p className={styles.emptyStateText}>{emptyState?.description}</p>
                </div>
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={row.id || rowIndex}>
                {columns.map((col, colIndex) => (
                  <td 
                    key={col.key || colIndex} 
                    className={`
                      ${styles.td} 
                      ${col.align === "right" ? styles.contentRight : ""} 
                      ${col.bold ? styles.textBold : ""}
                    `}
                  >
                    {/* Allow custom rendering if passed, otherwise fallback to plain text */}
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};







import React from "react";
import { Table } from "./Table";

export const Autorisations = () => {
  // 1. Define the table configuration
  const columns = [
    { 
      key: "montant", 
      label: "Montant", 
      align: "right", 
      bold: true 
    },
    { 
      key: "reference", 
      label: "Référence" 
    },
    { 
      key: "date", 
      label: "Date échéance", 
      sortable: true 
    },
    { 
      key: "utilisateur", 
      label: "Utilisateur" 
    },
  ];

  // 2. Define the empty state text for this specific feature
  const emptyStateConfig = {
    title: "Aucune autorisation",
    description: "Ce compte ne présente aucune autorisation en cours."
  };

  // 3. Provide the data (this would usually come from an API/useState)
  const autorisationsData = [
    {
      id: 1,
      montant: "12 500.00",
      reference: "Découvert aisance",
      date: "09-04-2026",
      utilisateur: "Benslimane Kamal",
    }
  ];

  // Pass an empty array `data={[]}` to see your empty state design in action
  return (
    <section>
      <Table 
        columns={columns} 
        data={autorisationsData} 
        emptyState={emptyStateConfig} 
      />
    </section>
  );
};
