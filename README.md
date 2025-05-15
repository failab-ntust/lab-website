# FAILAB

這是一個使用 [Next.js](https://nextjs.org/) 建立的網站，使用 `create-next-app` 初始化，搭配 [MUI](https://mui.com/) 與 [Swiper](https://swiperjs.com/) 進行 UI 開發。

## 環境

- [Node.js](https://nodejs.org/en) - v22.14.0
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) - v1.22.22
- React - 19.1.0
- Next - 15.2.4

## 使用說明

1. 將專案從 GitHub 複製下來
    ```bash
    git clone https://github.com/failab-ntust/lab-website.git
    ```
    ```bash
    cd lab-website
    ```
2. 安裝所有相依套件（依據 package.json）
    ```bash
    yarn
    ```
    
3. 啟動開發伺服器:
    ```bash
    yarn dev
    ```
    在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看畫面

## 部署資訊

- 本網站透過 GitHub Actions 自動部署至 GitHub Pages。每次推送（push）至 `main` 分支時，會自動觸發部署流程。

- 部署結果會發佈至 GitHub Pages 預設網址：[failab-ntust.github.io/lab-website](https://failab-ntust.github.io/lab-website)，並透過自訂網域 [www.ccchang.cc](https://www.ccchang.cc) 對外公開存取。

* 可於 GitHub 專案的 [`Settings → Pages`](https://github.com/failab-ntust/lab-website/settings/pages) 中設定。

## 使用套件

- [MUI](https://mui.com/material-ui/getting-started/installation/) - ^7.0.1

- [swiper](https://swiperjs.com/react) - ^11.2.6

