/* Pagination.module.css */

.container {
  width: 100%;
  max-width: 768px;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* --- Typography --- */
.textTertiary {
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
  margin: 0;
}

.summaryText {
  width: 110px;
}

/* --- Layout Groups --- */
.controlGroup {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

/* --- Buttons --- */
.navButton {
  padding: 8px;
  background: var(--button-secondary-btn-secondary-bg, #FCFCFC);
  box-shadow: 0px 1px 2px rgba(34, 34, 32, 0.08);
  border-radius: 8px;
  outline: 1px solid var(--button-secondary-btn-secondary-border, rgba(34, 34, 32, 0.15));
  outline-offset: -1px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.navButton:disabled {
  background: var(--button-disabled-btn-bg-disabled, #EEEDE6);
  outline: 1px solid var(--button-disabled-btn-border-disabled, rgba(34, 34, 32, 0.10));
  cursor: not-allowed;
  box-shadow: none;
}

/* --- Dropdown Selectors --- */
.dropdown {
  padding: 8px 8px 8px 12px;
  background: var(--input-bg-input, #FBFBF9);
  box-shadow: 0px 1px 0px rgba(34, 34, 32, 0.05);
  border-radius: 6px;
  outline: 1px solid var(--input-border, rgba(34, 34, 32, 0.15));
  outline-offset: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.dropdownText {
  color: var(--text-text-black, black);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  min-width: 22px;
  margin: 0;
  text-align: center;
}

/* --- Icons --- */
.iconBox {
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
}

.iconArrow {
  width: 9.33px;
  height: 9.33px;
  left: 3.33px;
  top: 3.33px;
  position: absolute;
  outline: 1.25px solid var(--button-secondary-btn-secondary-icon, #5D5C59);
  outline-offset: -0.63px;
}

/* Automatically change icon color when the parent button is disabled */
.navButton:disabled .iconArrow {
  outline-color: var(--button-disabled-btn-icon-disabled, #C2C0B9);
}

.iconChevron {
  width: 8px;
  height: 4px;
  left: 4px;
  top: 6px;
  position: absolute;
  outline: 1.25px solid var(--input-icon-input, #5D5C59);
  outline-offset: -0.63px;
}





import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = ({
  totalItems = 20,
  itemName = "opérations",
  currentPage = 1,
  itemsPerPage = 12,
  onPrevPage,
  onNextPage,
  onPageSelect,
  onItemsPerPageSelect
}) => {
  // Determine if buttons should be disabled based on state
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage * itemsPerPage >= totalItems;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
        {/* Left: Total Items Summary */}
        <p className={`${styles.textTertiary} ${styles.summaryText}`}>
          {totalItems} {itemName}
        </p>

        {/* Middle: Page Navigation Controls */}
        <div className={styles.controlGroup}>
          <button 
            type="button"
            className={styles.navButton} 
            disabled={isFirstPage}
            onClick={onPrevPage}
            aria-label="Previous page"
          >
            <div className={styles.iconBox}>
              <div className={styles.iconArrow} />
            </div>
          </button>

          <div 
            className={styles.dropdown} 
            onClick={onPageSelect}
            role="button"
            tabIndex={0}
          >
            <p className={styles.dropdownText}>{currentPage}</p>
            <div className={styles.iconBox}>
              <div className={styles.iconChevron} />
            </div>
          </div>

          <button 
            type="button"
            className={styles.navButton} 
            disabled={isLastPage}
            onClick={onNextPage}
            aria-label="Next page"
          >
            <div className={styles.iconBox}>
              <div className={styles.iconArrow} />
            </div>
          </button>
        </div>

        {/* Right: Items Per Page Controls */}
        <div className={styles.controlGroup}>
          <div 
            className={styles.dropdown} 
            onClick={onItemsPerPageSelect}
            role="button"
            tabIndex={0}
          >
            <p className={styles.dropdownText}>{itemsPerPage}</p>
            <div className={styles.iconBox}>
              <div className={styles.iconChevron} />
            </div>
          </div>
          <span className={styles.textTertiary}>
            lignes par page
          </span>
        </div>

      </div>
    </div>
  );
};
