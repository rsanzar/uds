import React from "react";
import styles from "./Frame.module.css";

export const Frame1010106802 = () => {
  return (
    <div className={styles.mainFrame}>
      <div className={styles.templateTask}>
        <div className={styles.frame1010106799}>
          <div>
            <span className={styles.disponibleSpan}>Disponible</span>
          </div>
          <button className={styles.buttons}>
            <div className={styles.xClose}>
              <div className={styles.icon} />
            </div>
          </button>
        </div>
      </div>
      
      <div className={styles.templateTask01}>
        <div className={styles.horizontalTabList}>
          <div className={styles.tabItem}>
            <div className={styles.frame1010106805}>
              <p className={styles.placeholder}>
                <span className={styles.placeholderSpan}>Général</span>
              </p>
            </div>
            <div className={styles.frame1010106808}>
              <div className={styles.rectangle3} />
            </div>
          </div>
          
          <div className={styles.tabItem01}>
            <div className={styles.frame101010680501}>
              <p className={styles.placeholder01}>
                <span className={styles.placeholder01Span}>Autorisations</span>
              </p>
              <div className={styles.neutralBadges}>
                <p className={styles.label}>
                  <span className={styles.labelSpan}>1</span>
                </p>
              </div>
            </div>
            <div className={styles.frame101010680801}>
              <div className={styles.rectangle301} />
            </div>
          </div>
          
          <div className={styles.tabItem02}>
            <div className={styles.frame101010680502}>
              <p className={styles.placeholder02}>
                <span className={styles.placeholder02Span}>Blocages</span>
              </p>
              <div className={styles.neutralBadges01}>
                <p className={styles.label01}>
                  <span className={styles.label01Span}>3</span>
                </p>
              </div>
            </div>
            <div className={styles.frame101010680802}>
              <div className={styles.rectangle302} />
            </div>
          </div>
          
          <div className={styles.tabItem03}>
            <div className={styles.frame101010680503}>
              <p className={styles.placeholder03}>
                <span className={styles.placeholder03Span}>Opérations en cours</span>
              </p>
              <div className={styles.neutralBadges02}>
                <p className={styles.label02}>
                  <span className={styles.label02Span}>20</span>
                </p>
              </div>
            </div>
            <div className={styles.frame101010680803}>
              <div className={styles.rectangle303} />
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.templateTask02}>
        <div className={styles.balanceContainer}>
          <div className={styles.balanceDetail}>
            <div className={styles.tableCell}>
              <p className={styles.text}>
                <span className={styles.textSpan}>Solde</span>
              </p>
            </div>
            <div className={styles.tableCell01}>
              <div>
                <span className={styles.text01Span}> 999 999 999 999,99</span>
              </div>
            </div>
          </div>
          
          <div className={styles.balanceDetail01}>
            <div className={styles.tableCell02}>
              <p className={styles.text02}>
                <span className={styles.text02Span}>Autorisations</span>
              </p>
            </div>
            <div className={styles.tableCell03}>
              <div>
                <span className={styles.text03Span}>12 500,00</span>
              </div>
            </div>
          </div>
          
          <div className={styles.balanceDetail02}>
            <div className={styles.tableCell04}>
              <p className={styles.text04}>
                <span className={styles.text04Span}>Blocages</span>
              </p>
            </div>
            <div className={styles.tableCell05}>
              <div>
                <span className={styles.text05Span}>75 000,00</span>
              </div>
            </div>
          </div>
          
          <div className={styles.balanceDetail03}>
            <div className={styles.tableCell06}>
              <p className={styles.text06}>
                <span className={styles.text06Span}>Opérations en cours au crédit</span>
              </p>
            </div>
            <div className={styles.tableCell07}>
              <div>
                <span className={styles.text07Span}>52 760,00</span>
              </div>
            </div>
          </div>
          
          <div className={styles.balanceDetail04}>
            <div className={styles.tableCell08}>
              <p className={styles.text08}>
                <span className={styles.text08Span}>Opérations en cours au débit</span>
              </p>
            </div>
            <div className={styles.tableCell09}>
              <div>
                <span className={styles.text09Span}>62 540,81</span>
              </div>
            </div>
          </div>
          
          <div className={styles.balanceDetail05}>
            <div className={styles.tableCell10}>
              <p className={styles.text10}>
                <span className={styles.text10Span}>Disponible</span>
              </p>
            </div>
            <div className={styles.tableCell11}>
              <div>
                <span className={styles.text11Span}> 999 999 902 719,18</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};






.disponibleSpan {
  color: var(--text-text-primary, #222220);
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
}

.icon {
  width: 10px;
  height: 10px;
  left: 5px;
  top: 5px;
  position: absolute;
  outline: 1.50px var(--button-tertiary-btn-tertiary-icon, #5D5C59) solid;
  outline-offset: -0.75px;
}

.placeholderSpan {
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
}

.placeholder {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.rectangle3 {
  align-self: stretch;
  height: 2.50px;
  background: var(--tab-indicator, #FA5C35);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

.placeholder01Span {
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.placeholder01 {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.labelSpan {
  color: var(--text-text-primary, #222220);
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.label {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.rectangle301 {
  align-self: stretch;
  height: 2.50px;
  background: var(--tab-indicator, #FA5C35);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

.placeholder02Span {
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.placeholder02 {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.label01Span {
  color: var(--text-text-primary, #222220);
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.label01 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.rectangle302 {
  align-self: stretch;
  height: 2.50px;
  background: var(--tab-indicator, #FA5C35);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

.placeholder03Span {
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.placeholder03 {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.label02Span {
  color: var(--text-text-primary, #222220);
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
}

.label02 {
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.rectangle303 {
  align-self: stretch;
  height: 2.50px;
  background: var(--tab-indicator, #FA5C35);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

.textSpan {
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.text {
  flex: 1 1 0;
}

.text01Span {
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
}

.text02Span {
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.text02 {
  flex: 1 1 0;
}

.text03Span {
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
}

.text04Span {
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.text04 {
  flex: 1 1 0;
}

.text05Span {
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
}

.text06Span {
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.text06 {
  flex: 1 1 0;
}

.text07Span {
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
}

.text08Span {
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
}

.text08 {
  flex: 1 1 0;
}

.text09Span {
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
}

.text10Span {
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
}

.text10 {
  flex: 1 1 0;
}

.text11Span {
  color: var(--text-text-credit, #15803D);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
}

.frame1010106805 {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: var(--burnt-sienna-600-2, rgba(250, 92, 53, 0.10));
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
}

.neutralBadges {
  min-width: 24px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background: var(--feedback-neutral-badges-bg, rgba(252, 252, 252, 0.05));
  box-shadow: 0px 1px 0px rgba(34, 34, 32, 0.05);
  overflow: hidden;
  border-radius: 6px;
  outline: 1px var(--feedback-neutral-badges-border, rgba(34, 34, 32, 0.20)) solid;
  outline-offset: -1px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  display: flex;
}

.neutralBadges01 {
  min-width: 24px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background: var(--feedback-neutral-badges-bg, rgba(252, 252, 252, 0.05));
  box-shadow: 0px 1px 0px rgba(34, 34, 32, 0.05);
  overflow: hidden;
  border-radius: 6px;
  outline: 1px var(--feedback-neutral-badges-border, rgba(34, 34, 32, 0.20)) solid;
  outline-offset: -1px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  display: flex;
}

.neutralBadges02 {
  min-width: 24px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background: var(--feedback-neutral-badges-bg, rgba(252, 252, 252, 0.05));
  box-shadow: 0px 1px 0px rgba(34, 34, 32, 0.05);
  overflow: hidden;
  border-radius: 6px;
  outline: 1px var(--feedback-neutral-badges-border, rgba(34, 34, 32, 0.20)) solid;
  outline-offset: -1px;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  display: flex;
}

.tableCell {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.tableCell01 {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
}

.tableCell02 {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.tableCell03 {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
}

.tableCell04 {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.tableCell05 {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
}

.tableCell06 {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.tableCell07 {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
}

.tableCell08 {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.tableCell09 {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
}

.tableCell10 {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.tableCell11 {
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
}

.xClose {
  width: 20px;
  height: 20px;
  position: relative;
  overflow: hidden;
}

.frame1010106808 {
  align-self: stretch;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  display: flex;
}

.frame101010680801 {
  width: 128px;
  padding-left: 10px;
  padding-right: 10px;
  opacity: 0;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  display: flex;
}

.frame101010680802 {
  width: 128px;
  padding-left: 10px;
  padding-right: 10px;
  opacity: 0;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  display: flex;
}

.frame101010680803 {
  width: 128px;
  padding-left: 10px;
  padding-right: 10px;
  opacity: 0;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  display: flex;
}

.frame101010680501 {
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 8px;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
}

.frame101010680502 {
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 8px;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
}

.frame101010680503 {
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 8px;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
}

.balanceDetail {
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.balanceDetail01 {
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.balanceDetail02 {
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.balanceDetail03 {
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.balanceDetail04 {
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.balanceDetail05 {
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

.buttons {
  width: 36px;
  height: 36px;
  padding: 8px;
  overflow: hidden;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.tabItem {
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
}

.tabItem01 {
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
}

.tabItem02 {
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
}

.tabItem03 {
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
}

.balanceContainer {
  align-self: stretch;
  background: var(--background-bg-card, #FBFBF9);
  border-radius: 8px;
  outline: 1px var(--background-bg-card-border, rgba(34, 34, 32, 0.10)) solid;
  outline-offset: -1px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.frame1010106799 {
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
}

.horizontalTabList {
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: inline-flex;
}

.templateTask02 {
  width: 100%;
  height: 810px;
  max-width: 768px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
}

.templateTask {
  width: 100%;
  height: 58px;
  max-width: 768px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px var(--surface-sf-border, rgba(34, 34, 32, 0.10)) solid;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.templateTask01 {
  width: 100%;
  max-width: 768px;
  padding-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 1px var(--tab-border, rgba(34, 34, 32, 0.10)) solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.mainFrame {
  width: 672px;
  height: 926px;
  max-width: 768px;
  background: var(--surface-sf-bg, #FBFBF9);
  box-shadow: 0px 4px 6px -4px rgba(34, 34, 32, 0.08), 0px 10px 15px -3px rgba(34, 34, 32, 0.08);
  border-left: 1px var(--surface-sf-border, rgba(34, 34, 32, 0.10)) solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
}

