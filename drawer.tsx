make this code css modules instead of styled cmponents

import React from "react";
import styled from "styled-components";

const StyledDisponiblespan = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledIcon = styled.div`
  width: 10px;
  height: 10px;
  left: 5px;
  top: 5px;
  position: absolute;
  outline: 1.50px var(--button-tertiary-btn-tertiary-icon, #5D5C59) solid;
  outline-offset: -0.75px;
`;

const StyledPlaceholderspan = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledPlaceholder = styled.p`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StyledRectangle3 = styled.div`
  align-self: stretch;
  height: 2.50px;
  background: var(--tab-indicator, #FA5C35);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
`;

const StyledPlaceholder01span = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledPlaceholder01 = styled.p`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StyledLabelspan = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
`;

const StyledLabel = styled.p`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StyledRectangle301 = styled.div`
  align-self: stretch;
  height: 2.50px;
  background: var(--tab-indicator, #FA5C35);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
`;

const StyledPlaceholder02span = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledPlaceholder02 = styled.p`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StyledLabel01span = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
`;

const StyledLabel01 = styled.p`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StyledRectangle302 = styled.div`
  align-self: stretch;
  height: 2.50px;
  background: var(--tab-indicator, #FA5C35);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
`;

const StyledPlaceholder03span = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledPlaceholder03 = styled.p`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StyledLabel02span = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
`;

const StyledLabel02 = styled.p`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StyledRectangle303 = styled.div`
  align-self: stretch;
  height: 2.50px;
  background: var(--tab-indicator, #FA5C35);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
`;

const StyledTextspan = styled.span`
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText = styled.p`
  flex: 1 1 0;
`;

const StyledText01span = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText02span = styled.span`
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText02 = styled.p`
  flex: 1 1 0;
`;

const StyledText03span = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText04span = styled.span`
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText04 = styled.p`
  flex: 1 1 0;
`;

const StyledText05span = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText06span = styled.span`
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText06 = styled.p`
  flex: 1 1 0;
`;

const StyledText07span = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText08span = styled.span`
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText08 = styled.p`
  flex: 1 1 0;
`;

const StyledText09span = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText10span = styled.span`
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText10 = styled.p`
  flex: 1 1 0;
`;

const StyledText11span = styled.span`
  color: var(--text-text-credit, #15803D);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledFrame1010106805 = styled.div`
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
`;

const StyledNeutralbadges = styled.div`
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
`;

const StyledNeutralbadges01 = styled.div`
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
`;

const StyledNeutralbadges02 = styled.div`
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
`;

const StyledTablecell = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const StyledTablecell01 = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
`;

const StyledTablecell02 = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const StyledTablecell03 = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
`;

const StyledTablecell04 = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const StyledTablecell05 = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
`;

const StyledTablecell06 = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const StyledTablecell07 = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
`;

const StyledTablecell08 = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const StyledTablecell09 = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  border-bottom: 1px var(--background-bg-card-separator, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
`;

const StyledTablecell10 = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const StyledTablecell11 = styled.div`
  flex: 1 1 0;
  min-height: 48px;
  padding: 10px;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: flex;
`;

const StyledXclose = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  overflow: hidden;
`;

const StyledFrame1010106808 = styled.div`
  align-self: stretch;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  display: flex;
`;

const StyledFrame101010680801 = styled.div`
  width: 128px;
  padding-left: 10px;
  padding-right: 10px;
  opacity: 0;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  display: flex;
`;

const StyledFrame101010680802 = styled.div`
  width: 128px;
  padding-left: 10px;
  padding-right: 10px;
  opacity: 0;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  display: flex;
`;

const StyledFrame101010680803 = styled.div`
  width: 128px;
  padding-left: 10px;
  padding-right: 10px;
  opacity: 0;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  display: flex;
`;

const StyledFrame101010680501 = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 8px;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledFrame101010680502 = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 8px;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledFrame101010680503 = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 8px;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledBalanceDetail = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StyledBalanceDetail01 = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StyledBalanceDetail02 = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StyledBalanceDetail03 = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StyledBalanceDetail04 = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StyledBalanceDetail05 = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StyledButtons = styled.button`
  width: 36px;
  height: 36px;
  padding: 8px;
  overflow: hidden;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledTabItem = styled.div`
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledTabItem01 = styled.div`
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledTabItem02 = styled.div`
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledTabItem03 = styled.div`
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledBalanceContainer = styled.div`
  align-self: stretch;
  background: var(--background-bg-card, #FBFBF9);
  border-radius: 8px;
  outline: 1px var(--background-bg-card-border, rgba(34, 34, 32, 0.10)) solid;
  outline-offset: -1px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
`;

const StyledFrame1010106799 = styled.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

const StyledHorizontaltablist = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: inline-flex;
`;

const StyledTemplateTask02 = styled.div`
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
`;

const StyledTemplateTask = styled.div`
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
`;

const StyledTemplateTask01 = styled.div`
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
`;

const StyledFrame1010106802 = styled.div`
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
`;

export const Frame1010106802 = () => {
  return (
    <StyledFrame1010106802>
      <StyledTemplateTask>
        <StyledFrame1010106799>
          <div><StyledDisponiblespan>Disponible</StyledDisponiblespan></div>
          <StyledButtons>
            <StyledXclose>
              <StyledIcon />
            </StyledXclose>
          </StyledButtons>
        </StyledFrame1010106799>
      </StyledTemplateTask>
      <StyledTemplateTask01>
        <StyledHorizontaltablist>
          <StyledTabItem>
            <StyledFrame1010106805>
              <StyledPlaceholder><StyledPlaceholderspan>Général</StyledPlaceholderspan></StyledPlaceholder>
            </StyledFrame1010106805>
            <StyledFrame1010106808>
              <StyledRectangle3 />
            </StyledFrame1010106808>
          </StyledTabItem>
          <StyledTabItem01>
            <StyledFrame101010680501>
              <StyledPlaceholder01><StyledPlaceholder01span>Autorisations</StyledPlaceholder01span></StyledPlaceholder01>
              <StyledNeutralbadges>
                <StyledLabel><StyledLabelspan>1</StyledLabelspan></StyledLabel>
              </StyledNeutralbadges>
            </StyledFrame101010680501>
            <StyledFrame101010680801>
              <StyledRectangle301 />
            </StyledFrame101010680801>
          </StyledTabItem01>
          <StyledTabItem02>
            <StyledFrame101010680502>
              <StyledPlaceholder02><StyledPlaceholder02span>Blocages</StyledPlaceholder02span></StyledPlaceholder02>
              <StyledNeutralbadges01>
                <StyledLabel01><StyledLabel01span>3</StyledLabel01span></StyledLabel01>
              </StyledNeutralbadges01>
            </StyledFrame101010680502>
            <StyledFrame101010680802>
              <StyledRectangle302 />
            </StyledFrame101010680802>
          </StyledTabItem02>
          <StyledTabItem03>
            <StyledFrame101010680503>
              <StyledPlaceholder03><StyledPlaceholder03span>Opérations en cours</StyledPlaceholder03span></StyledPlaceholder03>
              <StyledNeutralbadges02>
                <StyledLabel02><StyledLabel02span>20</StyledLabel02span></StyledLabel02>
              </StyledNeutralbadges02>
            </StyledFrame101010680503>
            <StyledFrame101010680803>
              <StyledRectangle303 />
            </StyledFrame101010680803>
          </StyledTabItem03>
        </StyledHorizontaltablist>
      </StyledTemplateTask01>
      <StyledTemplateTask02>
        <StyledBalanceContainer>
          <StyledBalanceDetail>
            <StyledTablecell>
              <StyledText><StyledTextspan>Solde</StyledTextspan></StyledText>
            </StyledTablecell>
            <StyledTablecell01>
              <div><StyledText01span> 999 999 999 999,99</StyledText01span></div>
            </StyledTablecell01>
          </StyledBalanceDetail>
          <StyledBalanceDetail01>
            <StyledTablecell02>
              <StyledText02><StyledText02span>Autorisations</StyledText02span></StyledText02>
            </StyledTablecell02>
            <StyledTablecell03>
              <div><StyledText03span>12 500,00</StyledText03span></div>
            </StyledTablecell03>
          </StyledBalanceDetail01>
          <StyledBalanceDetail02>
            <StyledTablecell04>
              <StyledText04><StyledText04span>Blocages</StyledText04span></StyledText04>
            </StyledTablecell04>
            <StyledTablecell05>
              <div><StyledText05span>75 000,00</StyledText05span></div>
            </StyledTablecell05>
          </StyledBalanceDetail02>
          <StyledBalanceDetail03>
            <StyledTablecell06>
              <StyledText06><StyledText06span>Opérations en cours au crédit</StyledText06span></StyledText06>
            </StyledTablecell06>
            <StyledTablecell07>
              <div><StyledText07span>52 760,00</StyledText07span></div>
            </StyledTablecell07>
          </StyledBalanceDetail03>
          <StyledBalanceDetail04>
            <StyledTablecell08>
              <StyledText08><StyledText08span>Opérations en cours au débit</StyledText08span></StyledText08>
            </StyledTablecell08>
            <StyledTablecell09>
              <div><StyledText09span>62 540,81</StyledText09span></div>
            </StyledTablecell09>
          </StyledBalanceDetail04>
          <StyledBalanceDetail05>
            <StyledTablecell10>
              <StyledText10><StyledText10span>Disponible</StyledText10span></StyledText10>
            </StyledTablecell10>
            <StyledTablecell11>
              <div><StyledText11span> 999 999 902 719,18</StyledText11span></div>
            </StyledTablecell11>
          </StyledBalanceDetail05>
        </StyledBalanceContainer>
      </StyledTemplateTask02>
    </StyledFrame1010106802>
  );
};
