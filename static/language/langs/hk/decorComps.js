export default {
  intro:{
    desc:"簡介",
    techBorder:{
      detail1:"受@jiaminghi/data-view開源組件啟發，設計並開發了以下科技風格邊框。邊框的主題與全局主題聯動切換，通過右上角控制面板按鈕打開進行切換。",
      detail2:"科技風格邊框採用動態SVG節點，其自適應過程，相當於是SVG節點的重複計算。",
      detail3:"含多項配置項，其中風格方面跟隨主題，或者也可以自定義，請參考下方案例中的配置項。",
    },
    techButton:{
      detail1:"科技按鈕，用於替代頁面中的普通按鈕，使之有科技感。",
      detail2:"此組件A類採用了動態SVG節點開發，此組件雖然不需要自適應功能，但設定其寬度的時候，SVG節點會根據標題寬度進行自動計算定位。",
      detail3:"含多項配置項，如寬度、縮放等級、動畫等，其中風格方面跟隨主題，或者也可以自定義，請參考下方案例中的配置項。",
    },
    systemTitle:{
      detail1:"系統標題組件是位於頁面頂部的用於展示系統名稱的科技風格組件，其係統名稱，無法隨意修改，和許可證中的系統名稱綁定。",
      detail2:"此組件採用了動態SVG節點開發，此組件雖然不需要自適應功能，但設定其寬度的時候，SVG節點會根據標題寬度進行自動計算定位。",
      detail3:"含多項配置項，如寬度、縮放等級、動畫等，其中風格方面跟隨主題，或者也可以自定義，請參考下方案例中的配置項。",
    },
    panelTitle:{
      detail1:"塊標題組件是用來給部分科技面板添加標題的組件，如aYinTechBorderB1-B4這類型不含科技標題的面板。",
      detail2:"此組件A類型採用了動態SVG節點開發，此組件雖然不需要自適應功能，但設定其寬度的時候，SVG節點會根據標題寬度進行自動計算定位。",
      detail3:"配置項相對簡單，如寬度、文字顏色、裝飾顏色等",
    },
    decoFrame:{
      detail1:"裝飾框，用於為頁面中的計數器、圖標等內容，添加一層裝飾邊框，使之有科技感。",
      detail2:"此組件採用了動態SVG節點開發，除了D類具備寬度自適應的功能外，其他幾類，均為等寬高的設計，通過scale來調整大小",
      detail3:"含多項配置項，縮放等級、外觀子類（subType）、方向切換等，其中風格方面跟隨主題，或者也可以自定義，請參考下方案例中的配置項。",
    }
  },
  nav:{
    techBorder:"科技邊框",
    techButton:"科技按鈕",
    systemTitle:"系統標題",
    panelTitle:"塊標題",
    decoFrame:"裝飾框",
  },
  tabs:{
    col1:"三列",
    col2:"四列",
    height1:"高",
    height2:"矮",
    ani1:"動畫開",
    ani2:"動畫關",
    config1:"配置項開",
    config2:"配置項關",
  },
  techBorder:{
    desc1:"這些邊框由aYin原創設計開發",
    desc11:"移植自@jiaminghi/data-view開源項目，二次開發修改了配置項以及部分外觀效果。組件保留了原始命名規則，致敬作者!",
    title:{
      short:"壹號",
      number:"No.1",
      regular:"常規標題",
      middle:"中等長度標題",
      long:"超長的科技面板標題"
    }
  },
  techButton:{
    type:{
      regular:"常規",
      long:"長文字",
      active:"激活狀態",
      disabled:"禁用狀態",
      custom:"自定義風格",
      scale:"縮放",
    },
    text:{
      regular:"常規的按鈕",
      long:"較長文字科技風格按鈕",
      active:"激活的按鈕",
      disabled:"禁用的按鈕",
      custom:"自定義按鈕",
      scale:"縮放的按鈕",
    }
  },
  systemTitle:{
    desc1:"帶動畫效果的系統標題組件,原創開發的第一款標題組件。",
    desc2:"原創設計開發的銳利風格的標題組件，內置2種子風格，可以通過subType切換子風格。",
    desc3:"原創設計開發的銳利風格的標題組件，內置2種子風格，可以通過subType切換子風格。",
    desc4:"原創設計開發的銳利風格的標題組件，內置2種子風格，可以通過subType切換子風格。",
    desc5:"簡潔風格的系統標題，無裝飾效果"
  },
  panelTitle:{
    regular:"常規標題",
    long:"較長的輔助補充面板標題",
    custom:"自定義風格",
  },
  decoFrame:{
    desc5:"寬度自適應，高度固定，通過scale來調整大小"
  }
}