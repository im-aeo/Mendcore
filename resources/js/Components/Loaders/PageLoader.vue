<template>
    <div class="loading-page">
    <symbol id="svg-loader" viewBox="0 0 44 44">
        <g fill="none" fill-rule="evenodd" stroke-width="1.5">
            <circle cx="22" cy="22" r="6" stroke-opacity="0">
                <animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-width" begin="1.5s" dur="3s" values="1.5;0" calcMode="linear" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="22" cy="22" r="6" stroke-opacity="0">
                <animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-width" begin="3s" dur="3s" values="1.5;0" calcMode="linear" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="22" cy="22" r="1">
                <animate attributeName="r" begin="0s" dur="1.5s" values="1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate>
            </circle>
        </g>
    </symbol>
</div>
</template>

<style scoped>
.loading-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
