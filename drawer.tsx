import React from "react";
import styled from "styled-components";

const StyledStatusspan = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledTextspan = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText = styled.p`
  text-align: right;
`;

const StyledStatus01span = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText01span = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText01 = styled.p`
  flex: 1 1 0;
`;

const StyledStatus02span = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledStatus02 = styled.p`
  flex: 1 1 0;
`;

const StyledIcon = styled.div`
  width: 6.67px;
  height: 10.67px;
  left: 4.67px;
  top: 2.67px;
  position: absolute;
  outline: 1.25px var(--button-secondary-btn-secondary-icon, #5D5C59) solid;
  outline-offset: -0.63px;
`;

const StyledText02span = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText02 = styled.p`
  flex: 1 1 0;
`;

const StyledStatus03span = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText03span = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledText03 = styled.p`
  flex: 1 1 0;
`;

const StyledTableheadercell = styled.div`
  align-self: stretch;
  height: 44px;
  min-height: 44px;
  padding: 10px;
  background: var(--table-header-bg-default, rgba(157, 143, 114, 0.05));
  border-bottom: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledTablecell = styled.div`
  align-self: stretch;
  max-height: 60px;
  min-height: 44px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  display: inline-flex;
`;

const StyledTableheadercell01 = styled.div`
  align-self: stretch;
  height: 44px;
  min-height: 44px;
  padding: 10px;
  background: var(--table-header-bg-default, rgba(157, 143, 114, 0.05));
  border-bottom: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledTablecell01 = styled.div`
  align-self: stretch;
  max-height: 60px;
  min-height: 44px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StyledTablecell02 = styled.div`
  align-self: stretch;
  max-height: 60px;
  min-height: 44px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StyledTableheadercell03 = styled.div`
  align-self: stretch;
  height: 44px;
  min-height: 44px;
  padding: 10px;
  background: var(--table-header-bg-default, rgba(157, 143, 114, 0.05));
  border-bottom: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledTablecell03 = styled.div`
  align-self: stretch;
  max-height: 60px;
  min-height: 44px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StyledChevronselectorvertical = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
`;

const StyledColumn = styled.div`
  flex: 1 1 0;
  border-right: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

const StyledColumn01 = styled.div`
  flex: 1 1 0;
  border-right: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

const StyledColumn03 = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

const StyledButtons = styled.button`
  padding: 6px;
  background: var(--button-secondary-btn-secondary-bg, #FCFCFC);
  box-shadow: 0px 1px 0px rgba(34, 34, 32, 0.05);
  overflow: hidden;
  border-radius: 8px;
  outline: 1px var(--button-secondary-btn-secondary-border, rgba(34, 34, 32, 0.15)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledTableheadercell02 = styled.div`
  align-self: stretch;
  height: 44px;
  min-height: 44px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: var(--table-header-bg-default, rgba(157, 143, 114, 0.05));
  border-bottom: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

const StyledColumn02 = styled.div`
  flex: 1 1 0;
  border-right: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

const StyledTable = styled.div`
  align-self: stretch;
  background: var(--table-base-bg, #FBFBF9);
  overflow: hidden;
  border-radius: 8px;
  outline: 1px var(--table-base-border, rgba(34, 34, 32, 0.10)) solid;
  outline-offset: -1px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

export const Table = () => {
  return (
    <StyledTable>
      <StyledColumn>
        <StyledTableheadercell>
          <div><StyledStatusspan>Montant</StyledStatusspan></div>
        </StyledTableheadercell>
        <StyledTablecell>
          <StyledText><StyledTextspan>12 500.00</StyledTextspan></StyledText>
        </StyledTablecell>
      </StyledColumn>
      <StyledColumn01>
        <StyledTableheadercell01>
          <div><StyledStatus01span>Référence</StyledStatus01span></div>
        </StyledTableheadercell01>
        <StyledTablecell01>
          <StyledText01><StyledText01span>Découvert aisance</StyledText01span></StyledText01>
        </StyledTablecell01>
      </StyledColumn01>
      <StyledColumn02>
        <StyledTableheadercell02>
          <StyledStatus02><StyledStatus02span>Date échéance</StyledStatus02span></StyledStatus02>
          <StyledButtons>
            <StyledChevronselectorvertical>
              <StyledIcon />
            </StyledChevronselectorvertical>
          </StyledButtons>
        </StyledTableheadercell02>
        <StyledTablecell02>
          <StyledText02><StyledText02span>09-04-2026</StyledText02span></StyledText02>
        </StyledTablecell02>
      </StyledColumn02>
      <StyledColumn03>
        <StyledTableheadercell03>
          <div><StyledStatus03span>Utilisateur</StyledStatus03span></div>
        </StyledTableheadercell03>
        <StyledTablecell03>
          <StyledText03><StyledText03span>Benslimane Kamal</StyledText03span></StyledText03>
        </StyledTablecell03>
      </StyledColumn03>
    </StyledTable>
  );
};
























import React from "react";
import styled from "styled-components";

const StyledStatusspan = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledStatus01span = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledStatus02span = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledStatus02 = styled.p`
  flex: 1 1 0;
`;

const StyledIcon = styled.div`
  width: 6.67px;
  height: 10.67px;
  left: 4.67px;
  top: 2.67px;
  position: absolute;
  outline: 1.25px var(--button-secondary-btn-secondary-icon, #5D5C59) solid;
  outline-offset: -0.63px;
`;

const StyledStatus03span = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledTextspan = styled.span`
  color: var(--text-text-primary, #222220);
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledText = styled.p`
  align-self: stretch;
  text-align: center;
`;

const StyledSupportingtextspan = styled.span`
  color: var(--text-text-secondary, #5D5C59);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledSupportingtext = styled.p`
  align-self: stretch;
  text-align: center;
`;

const StyledTableheadercell = styled.div`
  align-self: stretch;
  height: 44px;
  min-height: 44px;
  padding: 10px;
  background: var(--table-header-bg-default, rgba(157, 143, 114, 0.05));
  border-right: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  border-bottom: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledTableheadercell01 = styled.div`
  align-self: stretch;
  height: 44px;
  min-height: 44px;
  padding: 10px;
  background: var(--table-header-bg-default, rgba(157, 143, 114, 0.05));
  border-right: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  border-bottom: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledTableheadercell03 = styled.div`
  align-self: stretch;
  height: 44px;
  min-height: 44px;
  padding: 10px;
  background: var(--table-header-bg-default, rgba(157, 143, 114, 0.05));
  border-bottom: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
`;

const StyledTextandsupportingtext = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  display: flex;
`;

const StyledChevronselectorvertical = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
`;

const StyledColumn = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

const StyledColumn01 = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

const StyledColumn03 = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

const StyledEmptyStateIllustrationsLightModeNoData = styled.div`
  align-self: stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 36px;
  padding-bottom: 36px;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledButtons = styled.button`
  padding: 6px;
  background: var(--button-secondary-btn-secondary-bg, #FCFCFC);
  box-shadow: 0px 1px 0px rgba(34, 34, 32, 0.05);
  overflow: hidden;
  border-radius: 8px;
  outline: 1px var(--button-secondary-btn-secondary-border, rgba(34, 34, 32, 0.15)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledTableheadercell02 = styled.div`
  align-self: stretch;
  height: 44px;
  min-height: 44px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: var(--table-header-bg-default, rgba(157, 143, 114, 0.05));
  border-right: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  border-bottom: 1px var(--table-lignes-row-border, rgba(34, 34, 32, 0.10)) solid;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  display: inline-flex;
`;

const StyledColumn02 = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

const StyledFrame1010106803 = styled.div`
  width: 640px;
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StyledTable = styled.div`
  align-self: stretch;
  background: var(--table-base-bg, #FBFBF9);
  overflow: hidden;
  border-radius: 8px;
  outline: 1px var(--table-base-border, rgba(34, 34, 32, 0.10)) solid;
  outline-offset: -1px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: inline-flex;
`;

export const Table = () => {
  return (
    <StyledTable>
      <StyledFrame1010106803>
        <StyledColumn>
          <StyledTableheadercell>
            <div><StyledStatusspan>Montant</StyledStatusspan></div>
          </StyledTableheadercell>
        </StyledColumn>
        <StyledColumn01>
          <StyledTableheadercell01>
            <div><StyledStatus01span>Référence</StyledStatus01span></div>
          </StyledTableheadercell01>
        </StyledColumn01>
        <StyledColumn02>
          <StyledTableheadercell02>
            <StyledStatus02><StyledStatus02span>Date échéance</StyledStatus02span></StyledStatus02>
            <StyledButtons>
              <StyledChevronselectorvertical>
                <StyledIcon />
              </StyledChevronselectorvertical>
            </StyledButtons>
          </StyledTableheadercell02>
        </StyledColumn02>
        <StyledColumn03>
          <StyledTableheadercell03>
            <div><StyledStatus03span>Utilisateur</StyledStatus03span></div>
          </StyledTableheadercell03>
        </StyledColumn03>
      </StyledFrame1010106803>
      <StyledEmptyStateIllustrationsLightModeNoData>
        <StyledTextandsupportingtext>
          <StyledText><StyledTextspan>Aucune autorisation</StyledTextspan></StyledText>
          <StyledSupportingtext><StyledSupportingtextspan>Ce compte ne présente aucune autorisation en cours.</StyledSupportingtextspan></StyledSupportingtext>
        </StyledTextandsupportingtext>
      </StyledEmptyStateIllustrationsLightModeNoData>
    </StyledTable>
  );
};



