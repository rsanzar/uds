/* Table.module.css */

.tableWrapper {
  width: 100%;
  background: var(--table-base-bg, #FBFBF9);
  border-radius: 8px;
  outline: 1px solid var(--table-base-border, rgba(34, 34, 32, 0.10));
  outline-offset: -1px;
  overflow: hidden;
  font-family: 'Open Sans', sans-serif;
}

.table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

/* --- Headers --- */
.th {
  height: 44px;
  padding: 8px 10px;
  background: var(--table-header-bg-default, rgba(157, 143, 114, 0.05));
  border-bottom: 1px solid var(--table-lignes-row-border, rgba(34, 34, 32, 0.10));
  border-right: 1px solid var(--table-lignes-row-border, rgba(34, 34, 32, 0.10));
  
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
  vertical-align: middle;
}

.th:last-child {
  border-right: none;
}

.headerContent {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Used to align the Montant column to the right */
.contentRight {
  justify-content: flex-end;
  text-align: right;
}

/* --- Body Cells --- */
.td {
  padding: 8px 10px;
  min-height: 44px;
  border-right: 1px solid var(--table-lignes-row-border, rgba(34, 34, 32, 0.10));
  border-bottom: 1px solid var(--table-lignes-row-border, rgba(34, 34, 32, 0.10));
  
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
  vertical-align: middle;
}

.td:last-child {
  border-right: none;
}

/* Removes the bottom border from the last row to avoid double borders with the wrapper */
.table tr:last-child .td {
  border-bottom: none;
}

.textBold {
  font-weight: 600;
}

/* --- Sort Button --- */
.sortButton {
  padding: 6px;
  background: var(--button-secondary-btn-secondary-bg, #FCFCFC);
  box-shadow: 0px 1px 0px rgba(34, 34, 32, 0.05);
  border-radius: 8px;
  outline: 1px solid var(--button-secondary-btn-secondary-border, rgba(34, 34, 32, 0.15));
  outline-offset: -1px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.iconWrapper {
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
}

.icon {
  width: 6.67px;
  height: 10.67px;
  left: 4.67px;
  top: 2.67px;
  position: absolute;
  outline: 1.25px solid var(--button-secondary-btn-secondary-icon, #5D5C59);
  outline-offset: -0.63px;
}

/* --- Empty State --- */
.emptyStateContainer {
  padding: 36px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2px;
}

.emptyStateTitle {
  color: var(--text-text-primary, #222220);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
}

.emptyStateText {
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}








import React from "react";
import styles from "./Table.module.css";

// A reusable sub-component for your custom chevron button
const SortButton = () => (
  <button className={styles.sortButton} type="button">
    <div className={styles.iconWrapper}>
      <div className={styles.icon} />
    </div>
  </button>
);

export const Table = ({ data }) => {
  // Fallback data mapping to the exact values from your original export
  const tableData = data || [
    {
      id: 1,
      montant: "12 500.00",
      reference: "Découvert aisance",
      date: "09-04-2026",
      utilisateur: "Benslimane Kamal",
    },
  ];

  const isEmpty = tableData.length === 0;

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>
              <div className={`${styles.headerContent} ${styles.contentRight}`}>
                <span>Montant</span>
              </div>
            </th>
            <th className={styles.th}>
              <div className={styles.headerContent}>
                <span>Référence</span>
              </div>
            </th>
            <th className={styles.th}>
              <div className={styles.headerContent}>
                <span>Date échéance</span>
                <SortButton />
              </div>
            </th>
            <th className={styles.th}>
              <div className={styles.headerContent}>
                <span>Utilisateur</span>
              </div>
            </th>
          </tr>
        </thead>
        
        <tbody>
          {isEmpty ? (
            <tr>
              {/* colSpan="4" ensures the empty state spans across all columns */}
              <td colSpan="4" className={styles.td} style={{ borderBottom: "none" }}>
                <div className={styles.emptyStateContainer}>
                  <p className={styles.emptyStateTitle}>Aucune autorisation</p>
                  <p className={styles.emptyStateText}>
                    Ce compte ne présente aucune autorisation en cours.
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            tableData.map((row) => (
              <tr key={row.id}>
                {/* Montant is right-aligned and bolder in your design */}
                <td className={`${styles.td} ${styles.contentRight} ${styles.textBold}`}>
                  {row.montant}
                </td>
                <td className={styles.td}>{row.reference}</td>
                <td className={styles.td}>{row.date}</td>
                <td className={styles.td}>{row.utilisateur}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
